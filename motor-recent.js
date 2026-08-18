(function () {
  const MOTOR_PANE = "motor-recent";
  const originalPaneMarkup = paneMarkup;
  const originalOpenVenue = openVenue;

  const trendMeta = (trend) => ({
    up: ["上昇", "up"],
    down: ["下降", "down"],
    flat: ["横ばい", "flat"],
    unknown: ["判定待ち", "unknown"],
  }[String(trend || "unknown")] || ["判定待ち", "unknown"]);

  const percent = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? `${n.toFixed(1)}%` : "-";
  };

  const decimal = (value, digits = 2) => {
    const n = Number(value);
    return Number.isFinite(n) ? n.toFixed(digits) : "-";
  };

  const recentFor = (r, racer) => {
    if (racer?.motor_recent) return racer.motor_recent;
    const rows = Array.isArray(r?.motor_recent) ? r.motor_recent : [];
    return rows.find((row) => Number(row?.lane) === Number(racer?.lane)) || null;
  };

  const finishPills = (motor) => {
    const rows = Array.isArray(motor?.finishes) ? motor.finishes : [];
    if (!rows.length) return '<span class="motor-recent-empty">-</span>';
    return `<div class="motor-finish-pills">${rows.map((value) =>
      `<span class="motor-finish-pill finish-${esc(String(value).replace(/[^1-6]/g, "") || "x")}">${esc(value)}</span>`
    ).join("")}</div>`;
  };

  const detailTable = (motor) => {
    const runs = Array.isArray(motor?.runs) ? motor.runs : [];
    if (!runs.length) return '<div class="note">直近10走の詳細は未取得です。</div>';
    return `<div class="motor-detail-scroll"><table class="motor-detail-table">
      <tr><th>#</th><th>使用選手</th><th>級別</th><th>展示T</th><th>展示順位</th><th>進入</th><th>着順</th></tr>
      ${runs.map((run, index) => `<tr>
        <td>${index + 1}</td>
        <td>${esc(safe(run.racer))}</td>
        <td>${esc(safe(run.class))}</td>
        <td>${esc(decimal(run.exhibition_time, 2))}</td>
        <td>${esc(decimal(run.exhibition_rank, 1))}位</td>
        <td>${esc(safe(run.course))}C</td>
        <td><span class="motor-detail-finish">${esc(safe(run.finish))}</span></td>
      </tr>`).join("")}
    </table></div>`;
  };

  const desktopRow = (r, racer) => {
    const motor = recentFor(r, racer);
    const trend = trendMeta(motor?.trend);
    return `<tr>
      <td>${lane(racer.lane)}</td>
      <td><b>No.${esc(safe(racer.motor_no || motor?.motor_no))}</b></td>
      <td>${percent(racer.motor_2)}</td>
      <td>${percent(racer.motor_3)}</td>
      <td class="motor-recent-strong">${percent(motor?.top2_rate)}</td>
      <td class="motor-recent-strong">${percent(motor?.top3_rate)}</td>
      <td>${decimal(motor?.avg_exhibition_rank, 1)}位</td>
      <td>${decimal(motor?.avg_exhibition_time, 2)}</td>
      <td><span class="motor-trend ${trend[1]}">${trend[0]}</span></td>
      <td>${finishPills(motor)}</td>
    </tr>`;
  };

  const mobileCard = (r, racer) => {
    const motor = recentFor(r, racer);
    const trend = trendMeta(motor?.trend);
    return `<div class="motor-mobile-card">
      <div class="motor-mobile-head">
        <div>${lane(racer.lane)} <b>No.${esc(safe(racer.motor_no || motor?.motor_no))}</b></div>
        <span class="motor-trend ${trend[1]}">${trend[0]}</span>
      </div>
      <div class="motor-mobile-grid">
        <div><span>2連率</span><b>${percent(racer.motor_2)}</b></div>
        <div><span>3連率</span><b>${percent(racer.motor_3)}</b></div>
        <div><span>直近10走 2連</span><b>${percent(motor?.top2_rate)}</b></div>
        <div><span>直近10走 3連</span><b>${percent(motor?.top3_rate)}</b></div>
        <div><span>平均展示順位</span><b>${decimal(motor?.avg_exhibition_rank, 1)}位</b></div>
        <div><span>平均展示T</span><b>${decimal(motor?.avg_exhibition_time, 2)}</b></div>
      </div>
      <div class="motor-mobile-finishes"><span>直近10走着順</span>${finishPills(motor)}</div>
      <details class="motor-details"><summary>10走詳細を表示</summary>${detailTable(motor)}</details>
    </div>`;
  };

  window.renderMotorRecent = function renderMotorRecent() {
    const r = race();
    const racers = Array.isArray(r.racers) ? r.racers : [];
    const hasAny = racers.some((racer) => recentFor(r, racer)?.available);

    if (!hasAny) {
      return `<div class="card"><h2>${esc(safe(r.race))}R モーター10走</h2>
        <div class="note">モーター直近10走は未取得です。朝取得でMOTORデータが取得できた場は自動表示されます。</div>
      </div>`;
    }

    return `<div class="card motor-recent-card">
      <h2>${esc(safe(r.race))}R モーター10走</h2>
      <div class="note">BOATERSのモーター直近10走を6艇比較。表示用の「上昇 / 横ばい / 下降」は直近5走と前5走の着順・展示順位から算出します。</div>
      <div class="motor-desktop">
        <div class="motor-table-scroll"><table class="motor-recent-table">
          <tr>
            <th>艇</th><th>モーター</th><th>2連率</th><th>3連率</th>
            <th>直近10走 2連</th><th>直近10走 3連</th><th>平均展示順位</th>
            <th>平均展示T</th><th>トレンド</th><th>直近10走着順</th>
          </tr>
          ${racers.map((racer) => desktopRow(r, racer)).join("")}
        </table></div>
        <div class="motor-detail-list">
          ${racers.map((racer) => {
            const motor = recentFor(r, racer);
            return `<details class="motor-details">
              <summary>${racer.lane}号艇 No.${esc(safe(racer.motor_no || motor?.motor_no))}　直近10走詳細</summary>
              ${detailTable(motor)}
            </details>`;
          }).join("")}
        </div>
      </div>
      <div class="motor-mobile">
        ${racers.map((racer) => mobileCard(r, racer)).join("")}
      </div>
    </div>`;
  };

  paneMarkup = function patchedPaneMarkup(pane = currentPane) {
    if (pane === MOTOR_PANE) return window.renderMotorRecent();
    return originalPaneMarkup(pane);
  };

  openVenue = async function patchedOpenVenue(slug, route = {}) {
    const wantsMotorPane = route?.pane === MOTOR_PANE;
    const safeRoute = wantsMotorPane ? { ...route, pane: "compare" } : route;
    await originalOpenVenue(slug, safeRoute);
    if (wantsMotorPane && currentPayload && currentVenueSlug === slug) {
      switchPane(MOTOR_PANE);
    }
  };
})();
