// Read public predictions/results only; never run or alter a prediction engine.
let scoresRequest = 0;

function scoresCombo(value) {
  const raw = Array.isArray(value) ? value.join('-') : String(value || '').trim();
  const parts = /^[1-6]{3}$/.test(raw) ? raw.split('') : raw.split(/[-,\s＞>→]+/);
  return parts.length === 3 && new Set(parts).size === 3 && parts.every((p) => /^[1-6]$/.test(p)) ? parts.join('-') : '';
}

function scoresToday() {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const part = (type) => parts.find((p) => p.type === type).value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

function scoresFinal(raceData, legacy) {
  const history = raceData?.prediction_history || legacy?.prediction_history || raceData?.prediction?.prediction_history;
  const snapshot = history?.final?.at(-1);
  if (snapshot) return snapshot.prediction || snapshot;
  const candidates = [raceData?.predictionFinal, legacy, raceData?.prediction];
  return candidates.find((p) => p && !['error', 'fetch_error', 'parse_error', 'pending'].includes(p.status)
    && (p.finalPredictionStatus === 'complete' || p.phase === 'final' || p.stage === 'final'
      || p.predictionStage === 'final' || p.predictionStage?.code === 'final'
      || p.predictionStage?.label === '本予想' || p.predictionStage?.badge === '本予想')) || null;
}

function scoresTickets(p) {
  if (!p) return [];
  const tickets = p.tickets;
  return [p.ai, p.balance, p.aiUpset, Array.isArray(tickets) ? tickets : null,
    tickets?.main, tickets?.deviation, tickets?.upset, tickets?.insurance]
    .flatMap((rows) => Array.isArray(rows) ? rows : []);
}

function scoresCancelled(result) {
  return ['cancelled', 'canceled', 'aborted', 'void', 'no_race', 'not_established'].includes(result?.status)
    || /中止|不成立/.test(String(result?.status || '') + String(result?.message || ''));
}

function scoresRow(raceNo, raceData, legacy, result) {
  if (scoresCancelled(result)) return { race: raceNo, status: '中止', icon: '−', confirmed: false, hit: false, order: '', payout: null };
  const order = scoresCombo(result?.order);
  const confirmed = Boolean(order) && ['ok', 'complete', 'confirmed'].includes(result?.status);
  const payoutText = String(result?.payout3t ?? '').replace(/[¥￥円,\s]/g, '');
  const payout = /^\d+$/.test(payoutText) ? Number(payoutText) : null;
  const final = scoresFinal(raceData, legacy);
  const hit = confirmed && scoresTickets(final).some((ticket) => scoresCombo(typeof ticket === 'string' ? ticket : ticket?.combo || ticket?.combination || ticket?.ticket || ticket?.bet) === order);
  return { race: raceNo, order: confirmed ? order : '', confirmed, hit, payout: confirmed ? payout : null,
    status: confirmed ? (hit ? '的中' : '不的中') : '結果待ち', icon: confirmed ? (hit ? '✅' : '❌') : '⏳',
    note: confirmed && !final ? '公開済み最終買い目なし' : '' };
}

function scoresTotal(rows) {
  return rows.reduce((total, row) => ({ hits: total.hits + Number(row.hit), confirmed: total.confirmed + Number(row.confirmed),
    payout: total.payout + (row.hit ? row.payout || 0 : 0) }), { hits: 0, confirmed: 0, payout: 0 });
}

function scoresSummary(total) {
  return `<b>${total.hits}/${total.confirmed}的中</b><b>${total.confirmed ? (100 * total.hits / total.confirmed).toFixed(1) : '0.0'}%</b><b>払戻 ¥${total.payout.toLocaleString('ja-JP')}</b>`;
}

async function loadScoresVenue(venue, date) {
  let payload = null;
  let failed = false;
  try {
    if (!venue.dataPath) throw new Error('no public payload');
    payload = await fetchJson(venue.dataPath);
    if (payload.date !== date) throw new Error('wrong date');
  } catch (_) { payload = null; failed = true; }
  const rows = [];
  // Limit concurrent requests while reusing the existing LIVE result documents.
  for (let first = 1; first <= 12; first += 4) {
    const batch = await Promise.all(Array.from({ length: 4 }, async (_, offset) => {
      const raceNo = first + offset;
      const raceData = payload?.races?.find((r) => Number(r.race) === raceNo);
      const legacy = payload?.preds?.[String(raceNo)];
      let result = raceData?.result && Object.keys(raceData.result).length ? raceData.result : legacy?.result || {};
      if (!scoresCancelled(result) && !(scoresCombo(result.order) && ['ok', 'complete', 'confirmed'].includes(result.status))) {
        try {
          const live = await fetchLiveJson(`${date}/${venue.slug}/${String(raceNo).padStart(2, '0')}/result.json`);
          if (live && live.date === date && live.venue === venue.slug && Number(live.race_no) === raceNo) {
            if (scoresCancelled(live)) result = { ...live.data, status: live.status, message: live.message };
            else if (['ok', 'complete', 'confirmed'].includes(live.status) && live.data) result = { ...live.data, status: live.status };
          }
        } catch (_) { failed = true; }
      }
      return scoresRow(raceNo, raceData, legacy, result);
    }));
    rows.push(...batch);
  }
  return { venue, rows, failed };
}

async function renderScores() {
  const request = ++scoresRequest;
  const target = $('scoresContent');
  target.innerHTML = '<div class="card note">成績を読み込み中...</div>';
  try {
    const today = scoresToday();
    const latest = await fetchJson('manifest.json');
    if (request !== scoresRequest) return;
    if (latest.date !== today) {
      target.innerHTML = `<div class="card"><h2>${esc(today)} の成績</h2><p class="note">本日の開催データはまだ公開されていません。</p></div>`;
      return;
    }
    const venues = (latest.venues || []).filter((v) => v.open && v.date === today);
    const results = [];
    for (const venue of venues) {
      results.push(await loadScoresVenue(venue, today));
      if (request !== scoresRequest) return;
    }
    const total = scoresTotal(results.flatMap((r) => r.rows));
    target.innerHTML = `<div class="card"><h2>${esc(today)} 本日の成績</h2><div class="scores-summary">${scoresSummary(total)}</div>
      <p class="note">確定レースのみ集計（中止・不成立を除外）。払戻合計は的中した3連単の公式払戻（各100円）。</p></div>`
      + (results.map(({ venue, rows, failed }) => `<article class="card scores-venue"><h2>${esc(venue.name)}</h2>
        <div class="scores-summary">${scoresSummary(scoresTotal(rows))}</div>
        ${failed ? '<p class="note">一部データを読み込めませんでした。再読み込みで更新してください。</p>' : ''}
        <div class="scores-races">${rows.map((row) => `<div class="scores-row"><b>${row.race}R</b>
          <span>${row.icon} ${row.status}${row.note ? `<small>${esc(row.note)}</small>` : ''}</span>
          <b>${esc(row.order || '−')}</b><span>${row.payout !== null ? `¥${row.payout.toLocaleString('ja-JP')}` : '−'}</span></div>`).join('')}</div></article>`).join('')
        || '<div class="card note">本日の開催場はありません。</div>');
  } catch (_) {
    if (request === scoresRequest) target.innerHTML = '<div class="card error">成績データを読み込めませんでした。再読み込みで更新してください。</div>';
  }
}
