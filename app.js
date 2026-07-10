const DATA_BASE = (window.KYOTEI_DATA_BASE || "./data").replace(/\/$/, "");

let manifest = null;
let currentPayload = null;
let currentRaceNo = 1;
let currentPane = "entry";
let ticketMode = "ai";

const $ = (id) => document.getElementById(id);
const yen = (v) => v ?? "-";

function dataUrl(path) {
  return `${DATA_BASE}/${path.replace(/^\//, "")}?t=${Date.now()}`;
}

function lane(n) {
  const colors = {
    1: ["#fff", "#111", "#d1d5db"],
    2: ["#111", "#fff", "#111"],
    3: ["#dc2626", "#fff", "#dc2626"],
    4: ["#1d7eea", "#fff", "#1d7eea"],
    5: ["#ffe74a", "#111", "#ffe74a"],
    6: ["#10a38a", "#fff", "#10a38a"],
  }[Number(n)] || ["#fff", "#111", "#d1d5db"];
  return `<span class="lane" style="background:${colors[0]};color:${colors[1]};border-color:${colors[2]}">${n}</span>`;
}

function gradeClass(c) {
  return String(c || "").startsWith("A") ? "grade a" : "grade";
}

async function fetchJson(path) {
  const res = await fetch(dataUrl(path), { cache: "no-store" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${path}`);
  return await res.json();
}

async function init() {
  try {
    $("syncState").textContent = "LOADING";
    manifest = await fetchJson("manifest.json");
    $("syncState").textContent = "LIVE JSON";
    renderTop();
  } catch (err) {
    $("syncState").textContent = "ERROR";
    $("venueGrid").innerHTML = `<div class="error">JSONを読み込めませんでした。<br>${err.message}<br><span class="note">config.js の KYOTEI_DATA_BASE を確認してください。</span></div>`;
  }
}

function renderTop() {
  $("dateTitle").textContent = `${manifest.date || ""} のレース`;
  $("venueGrid").innerHTML = (manifest.venues || []).map((v) => {
    if (!v.open) return `<div class="venue off"><h2>${v.name}</h2><p>非開催</p></div>`;
    return `<button class="venue" onclick="openVenue('${v.slug}')">
      <h2>${v.name}</h2>
      <p>${v.entryCount || 0}R分<br>1R ${v.firstDeadline || "-"}</p>
      <strong>予想を見る</strong>
    </button>`;
  }).join("");
}

async function openVenue(slug) {
  const v = manifest.venues.find((x) => x.slug === slug);
  if (!v) return;
  $("syncState").textContent = "FETCH";
  currentPayload = await fetchJson(v.dataPath || v.latestPath);
  currentRaceNo = currentPayload.races?.[0]?.race || 1;
  $("syncState").textContent = "LIVE JSON";
  showView("race");
  renderRace();
}

function showView(view) {
  $("topView").hidden = view !== "top";
  $("raceView").hidden = view !== "race";
  document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
}

function race() {
  return currentPayload.races.find((r) => Number(r.race) === Number(currentRaceNo)) || {};
}

function pred() {
  return currentPayload.preds?.[String(currentRaceNo)] || {};
}

function renderRace() {
  $("venueTitle").textContent = `${currentPayload.venue || "-"} ${currentRaceNo}R`;
  $("venueMeta").textContent = `${currentPayload.date || ""} / 締切 ${race().deadline || "-"} / ${currentPayload.engine || ""}`;
  $("raceTabs").innerHTML = (currentPayload.races || []).map((r) =>
    `<button class="${Number(r.race) === Number(currentRaceNo) ? "active" : ""}" onclick="currentRaceNo=${r.race};renderRace()">${r.race}R</button>`
  ).join("");
  renderPane();
}

function renderPane() {
  const map = {
    entry: renderEntry,
    tide: renderTide,
    prediction: renderPrediction,
    logs: renderLogs,
    result: renderResult,
    odds: renderOdds,
  };
  $("pane").innerHTML = (map[currentPane] || renderEntry)();
}

function renderEntry() {
  const r = race();
  return `<div class="card"><h2>${r.race}R 締切 ${r.deadline || "-"} <span class="note">${r.type || ""}</span></h2>
  ${(r.racers || []).map((b) => `<div class="boat">${lane(b.lane)}<div>
    <div class="name">${b.name}<span class="${gradeClass(b.class)}">${b.class || ""}</span></div>
    <div class="sub">${b.age || "-"}歳 / ${b.weight || "-"}kg　${b.branch || "-"}支部 / ${b.home || "-"}出身 / ${b.f || ""}</div>
    <div class="stats">
      <div class="stat"><span>全国</span><b>${b.nat_win ?? "-"}</b></div>
      <div class="stat"><span>当地</span><b>${b.local_win ?? "-"}</b></div>
      <div class="stat"><span>平均ST</span><b>${b.avg_st ?? "-"}</b></div>
    </div>
    <div class="stats">
      <div class="stat"><span>モーター</span><b>No.${b.motor_no ?? "-"}</b></div>
      <div class="stat"><span>2連率</span><b>${b.motor_2 ?? "-"}%</b></div>
      <div class="stat"><span>3連率</span><b>${b.motor_3 ?? "-"}%</b></div>
    </div>
  </div></div>`).join("")}</div>`;
}

function tideSvg(events) {
  if (!events?.length) return `<div class="note">潮見表データが未取得です。</div>`;
  const th = (t) => { const [h, m] = String(t).split(":").map(Number); return h + m / 60; };
  const pts = [{ time: "00:00", level: events[0].level }, ...events, { time: "24:00", level: events.at(-1).level }];
  pts.sort((a, b) => th(a.time) - th(b.time));
  const w = 720, h = 330, pl = 56, pr = 22, pt = 28, pb = 52;
  const lo = Math.min(...pts.map((p) => p.level)) - 20;
  const hi = Math.max(...pts.map((p) => p.level)) + 20;
  const x = (p) => pl + th(p.time) / 24 * (w - pl - pr);
  const y = (p) => pt + (hi - p.level) / (hi - lo) * (h - pt - pb);
  let d = `M${x(pts[0]).toFixed(1)},${y(pts[0]).toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], dx = (x(b) - x(a)) * 0.5;
    d += ` C${(x(a) + dx).toFixed(1)},${y(a).toFixed(1)} ${(x(b) - dx).toFixed(1)},${y(b).toFixed(1)} ${x(b).toFixed(1)},${y(b).toFixed(1)}`;
  }
  const marks = events.map((p) => `<circle cx="${x(p).toFixed(1)}" cy="${y(p).toFixed(1)}" r="7" fill="${p.type === "干潮" ? "#228be6" : "#f76707"}"/>
    <text x="${x(p).toFixed(1)}" y="${(y(p) - 13).toFixed(1)}" text-anchor="middle" font-size="15" fill="#334155">${p.type}</text>
    <text x="${x(p).toFixed(1)}" y="${(y(p) + 27).toFixed(1)}" text-anchor="middle" font-size="14" fill="#334155">${p.time}</text>
    <text x="${x(p).toFixed(1)}" y="${(y(p) + 45).toFixed(1)}" text-anchor="middle" font-size="13" fill="#64748b">${p.level}cm</text>`).join("");
  return `<svg class="tide-svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" rx="20" fill="#f8fbff"/><line x1="${pl}" y1="${h - pb}" x2="${w - pr}" y2="${h - pb}" stroke="#cbd5e1"/><path d="${d} L${w - pr},${h - pb} L${pl},${h - pb} Z" fill="rgba(34,139,230,.10)"/><path d="${d}" fill="none" stroke="#1c7ed6" stroke-width="5" stroke-linecap="round"/>${marks}</svg>`;
}

function renderTide() {
  const p = pred(), z = p.tideZone || {}, t = currentPayload.tide || {}, events = t.events || [];
  return `<div class="card"><h2>${currentPayload.venue || ""} 潮見表</h2>
    <div class="tide-type">${t.tideType || "-"}</div>
    <div class="note">${t.date || ""} / ${t.source || ""}<br>${t.summary || ""}</div>
    <div class="attack">このレースの潮判定：${z.nearest || "-"} / ${z.phase || z.zone || "-"} / ${z.bucket || z.band || "-"}</div>
    ${tideSvg(events)}
    <table><tr><th>種別</th><th>時刻</th><th>潮位</th></tr>${events.map((x) => `<tr><td>${x.type}</td><td>${x.time}</td><td>${x.level}cm</td></tr>`).join("")}</table>
  </div>`;
}

function renderPrediction() {
  const p = pred(), r = p.readability || {}, s = p.predictionStage || {};
  const tickets = p[ticketMode] || [];
  return `<div class="card">
    <div class="stage ${s.color || ""}"><div><b>${s.label || "AI予想"}</b><br>${s.statusText || ""}</div><span>${s.badge || ""}</span></div>
    <h2>${currentPayload.venue || ""}ロジック予想</h2>
    <div class="probgrid">
      <div class="probcard"><span>SAB</span><b>${p.sab || "-"}</b></div>
      <div class="probcard"><span>荒れ指数</span><b>${p.upsetIndex ?? "-"}%</b></div>
      <div class="probcard"><span>攻め役</span><b>${p.attack?.attackLane ?? "-"}号艇</b></div>
    </div>
    <div class="note">軸候補：${r.axisLane ? r.axisLane + "号艇" : "-"} / ${r.comment || ""}</div>
  </div>
  <div class="card"><h2>全艇確率</h2>
    <table><tr><th>枠</th><th>1着</th><th>2着</th><th>3着</th></tr>${[1,2,3,4,5,6].map((n) => `<tr><td>${lane(n)}</td><td>${p.win?.[n] ?? "-"}%</td><td>${p.second?.[n] ?? "-"}%</td><td>${p.third?.[n] ?? "-"}%</td></tr>`).join("")}</table>
  </div>
  <div class="card"><h2>買い目</h2>
    <div class="mode"><button class="${ticketMode === "ai" ? "active" : ""}" onclick="ticketMode='ai';renderPane()">AI予想</button><button class="${ticketMode === "aiUpset" ? "active" : ""}" onclick="ticketMode='aiUpset';renderPane()">AI荒れ予想</button></div>
    ${tickets.map((t) => `<div class="ticket"><div><div class="combo">${t.combo}</div><span class="role">${t.role || ""}</span></div><div><span class="note">確率</span><br><b>${Number(t.prob || 0).toFixed(2)}%</b></div><div><span class="note">オッズ</span><br><b>${t.odds ?? "-"}</b></div></div>`).join("")}
  </div>`;
}

function renderLogs() {
  const p = pred();
  const logs = p.logs || [];
  return `<div class="card"><h2>${currentRaceNo}R 補正ログ</h2>
    ${logs.map((l) => `<div class="log"><div class="log-title">${l.lane ? l.lane + "号艇 " : ""}${l.name || l.stage || ""}</div><div class="log-body">${Array.isArray(l.notes) ? l.notes.join("<br>") : (l.reason || "")}</div></div>`).join("") || `<div class="note">補正ログなし</div>`}
  </div>`;
}

function renderResult() {
  const p = pred(), r = p.result || {};
  if (!r.order) return `<div class="card"><h2>結果</h2><div class="note">${r.message || "結果はまだ未取得です。"}</div></div>`;
  return `<div class="card"><h2>結果</h2><div class="attack">${r.order}</div><div class="stats"><div class="stat"><span>払戻</span><b>${yen(r.payout3t)}</b></div><div class="stat"><span>人気</span><b>${yen(r.popularity3t)}</b></div><div class="stat"><span>決まり手</span><b>${yen(r.kimarite)}</b></div></div></div>`;
}

function renderOdds() {
  const odds = pred().odds || {};
  const items = Object.entries(odds).slice(0, 120);
  return `<div class="card"><h2>オッズ</h2>${items.length ? items.map(([k, v]) => `<div class="ticket"><div class="combo">${k}</div><b>${v}</b></div>`).join("") : `<div class="note">オッズはまだ未取得です。</div>`}</div>`;
}

document.querySelectorAll(".tabs button").forEach((b) => b.onclick = () => showView(b.dataset.view));
document.querySelectorAll(".subnav button").forEach((b) => b.onclick = () => {
  currentPane = b.dataset.pane;
  document.querySelectorAll(".subnav button").forEach((x) => x.classList.toggle("active", x === b));
  renderPane();
});
$("backTop").onclick = () => showView("top");

init();
