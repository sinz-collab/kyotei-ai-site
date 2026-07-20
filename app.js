const DEFAULT_DATA_BASES = [
  "../../kyotei-ai-data/data",
  "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data",
];
const DATA_BASES = (Array.isArray(window.KYOTEI_DATA_BASES) && window.KYOTEI_DATA_BASES.length
  ? window.KYOTEI_DATA_BASES
  : (window.KYOTEI_DATA_BASE ? [window.KYOTEI_DATA_BASE] : DEFAULT_DATA_BASES)
).map((base) => String(base).replace(/\/$/, ""));

let manifest = null;
let currentPayload = null;
let currentVenueSlug = "";
let currentRaceNo = 1;
let currentPane = "entry";
let ticketMode = "ai";
const LOCAL_REALTIME_API = window.KYOTEI_LOCAL_REALTIME_API || "http://127.0.0.1:8765";
const LOCAL_REALTIME_TOKEN = window.KYOTEI_LOCAL_REALTIME_TOKEN || "sinz-local-realtime";

const $ = (id) => document.getElementById(id);
const safe = (v, fallback = "-") => (v === undefined || v === null || v === "" ? fallback : v);
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const firstValue = (...values) => values.find((v) => v !== undefined && v !== null && v !== "");
const yen = (v) => safe(v);
const num = (v, fallback = 0) => {
  const n = Number(String(v ?? "").replace(/[^\d.\-]/g, ""));
  return Number.isFinite(n) ? n : fallback;
};
const rateNum = (v) => num(v, -1);
const pctInt = (v) => {
  const n = num(v, NaN);
  return Number.isFinite(n) ? `${Math.round(n)}%` : "-";
};
const pct1 = (v) => {
  const n = num(v, NaN);
  return Number.isFinite(n) ? `${n.toFixed(1)}%` : "-";
};

function dataUrls(path) {
  const cleanPath = String(path).replace(/^\//, "");
  return DATA_BASES.map((base) => `${base}/${cleanPath}?t=${Date.now()}`);
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

function raceClosed(r) {
  const date = currentPayload?.date || manifest?.date || "";
  const ymd = String(date).includes("/") ? String(date).replaceAll("/", "-") : String(date);
  const deadline = String(r?.deadline || "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ymd) || !/^\d{1,2}:\d{2}$/.test(deadline)) return false;
  const [h, m] = deadline.split(":").map(Number);
  const d = new Date(`${ymd}T00:00:00+09:00`);
  d.setHours(h, m, 0, 0);
  return Date.now() > d.getTime();
}

function fBadge(b) {
  const f = String(b.f || "");
  return /^F[1-9]/.test(f) ? `<span class="f-badge">${f}</span>` : "";
}

function boatColor(n) {
  return {
    1: "#fff",
    2: "#111827",
    3: "#dc2626",
    4: "#1d7eea",
    5: "#facc15",
    6: "#10a38a",
  }[Number(n)] || "#64748b";
}

async function fetchJson(path) {
  let lastError = null;
  for (const url of dataUrls(path)) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        lastError = new Error(`${res.status} ${res.statusText}: ${path}`);
        continue;
      }
      return await res.json();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error(`failed to load ${path}`);
}

function parseRoute() {
  const raw = location.hash.replace(/^#/, "");
  if (!raw) return {};
  const params = new URLSearchParams(raw);
  return {
    venue: params.get("venue") || "",
    race: Number(params.get("race") || ""),
    pane: params.get("pane") || "",
  };
}

function updateRoute() {
  if (!currentVenueSlug || !currentPayload) return;
  const params = new URLSearchParams();
  params.set("venue", currentVenueSlug);
  params.set("race", String(currentRaceNo));
  params.set("pane", currentPane);
  history.replaceState(null, "", `${location.pathname}${location.search}#${params.toString()}`);
}

function clearRoute() {
  currentVenueSlug = "";
  history.replaceState(null, "", `${location.pathname}${location.search}`);
}

async function init() {
  try {
    $("syncState").textContent = "LOADING";
    manifest = await fetchJson("manifest.json");
    $("syncState").textContent = "LIVE JSON";
    renderTop();
    const route = parseRoute();
    if (route.venue) await openVenue(route.venue, route);
  } catch (err) {
    $("syncState").textContent = "ERROR";
    $("venueGrid").innerHTML = `<div class="error">JSONを読み込めませんでした。<br>${err.message}<br><span class="note">config.js の KYOTEI_DATA_BASE を確認してください。</span></div>`;
  }
}

function renderTop() {
  $("dateTitle").textContent = `${manifest.date || ""} のレース`;
  $("venueGrid").innerHTML = (manifest.venues || []).map((v) => {
    const eventLabel = v.eventDayLabel ? `<b>${esc(v.eventDayLabel)}</b>` : "";
    if (!v.open) return `<div class="venue off">
      <div class="venue-status off">非開催</div>
      <h2>${v.name}</h2>
      <p>本日データなし</p>
    </div>`;
    return `<button class="venue" onclick="openVenue('${v.slug}')">
      <div class="venue-status on"><span>開催</span>${eventLabel}</div>
      <h2>${v.name}</h2>
      <p>${v.entryCount || 0}R分<br>1R締切 ${v.firstDeadline || "-"}</p>
      <strong>予想を見る</strong>
    </button>`;
  }).join("");
}

async function openVenue(slug, route = {}) {
  const v = manifest.venues.find((x) => x.slug === slug);
  if (!v) return;
  $("syncState").textContent = "FETCH";
  currentPayload = await fetchJson(v.dataPath || v.latestPath);
  currentVenueSlug = slug;
  currentPayload.venue = currentPayload.venue || v.name;
  currentPayload.date = currentPayload.date || v.date || manifest.date;
  currentPayload.eventDayLabel = currentPayload.eventDayLabel || v.eventDayLabel || "";
  currentPayload.eventDay = currentPayload.eventDay || v.eventDay || "";
  const races = currentPayload.races || [];
  currentRaceNo = races.some((r) => Number(r.race) === Number(route.race)) ? Number(route.race) : (races[0]?.race || 1);
  currentPane = ["entry", "compare", "realtime", "tide", "odds", "prediction", "logs", "result"].includes(route.pane) ? route.pane : "entry";
  $("syncState").textContent = "LIVE JSON";
  showView("race");
  renderRace();
}

async function refreshCurrentVenue() {
  if (!currentVenueSlug) return;
  const raceNo = currentRaceNo;
  const pane = currentPane;
  try {
    $("syncState").textContent = "更新中";
    manifest = await fetchJson("manifest.json");
    await openVenue(currentVenueSlug, { race: raceNo, pane });
    $("syncState").textContent = "更新済";
  } catch (err) {
    $("syncState").textContent = "ERROR";
    $("pane").insertAdjacentHTML("afterbegin", `<div class="error">最新データを読み込めませんでした。<br>${esc(err.message)}</div>`);
  }
}

async function fetchRealtimeNow() {
  if (!currentVenueSlug) return;
  const raceNo = currentRaceNo;
  const pane = currentPane;
  const date = currentPayload?.date || manifest?.date || "";
  try {
    $("syncState").textContent = "取得中";
    const res = await fetch(`${LOCAL_REALTIME_API}/fetch`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "X-Kyotei-Token": LOCAL_REALTIME_TOKEN},
      body: JSON.stringify({venue: currentVenueSlug, race: raceNo, date}),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.error || data.stage || `${res.status} ${res.statusText}`);
    }
    $("syncState").textContent = "反映中";
    manifest = await fetchJson("manifest.json");
    await openVenue(currentVenueSlug, { race: raceNo, pane });
    $("syncState").textContent = "反映済";
  } catch (err) {
    $("syncState").textContent = "再読込";
    await refreshCurrentVenue();
    $("pane").insertAdjacentHTML("afterbegin", `<div class="note">ローカル取得APIが使えないため、公開済みJSONだけ再読み込みしました。${esc(err.message)}</div>`);
  }
}

function showView(view) {
  $("topView").hidden = view !== "top";
  $("raceView").hidden = view !== "race";
  document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  if (view === "top") clearRoute();
}

function race() {
  return currentPayload?.races?.find((r) => Number(r.race) === Number(currentRaceNo)) || {};
}

function pred() {
  return currentPayload?.preds?.[String(currentRaceNo)] || {};
}

function eventDayLabel() {
  const r = race();
  return r.eventDayLabel || currentPayload?.eventDayLabel || currentPayload?.seriesDay || "";
}

function renderRace() {
  const r = race();
  $("venueTitle").textContent = `${currentPayload.venue || "-"} ${currentRaceNo}R`;
  const dayLabel = eventDayLabel();
  $("venueMeta").innerHTML = `${esc(currentPayload.date || "")} ${dayLabel ? `<span class="event-day-badge">${esc(dayLabel)}</span>` : ""}<br>締切 ${esc(r.deadline || "-")} / ${esc(currentPayload.engine || "")}`;
  $("raceTabs").innerHTML = (currentPayload.races || []).map((x) =>
    `<button class="${Number(x.race) === Number(currentRaceNo) ? "active" : ""} ${raceClosed(x) ? "closed" : ""}" onclick="currentRaceNo=${x.race};renderRace()">${x.race}R</button>`
  ).join("");
  document.querySelectorAll(".subnav button").forEach((x) => x.classList.toggle("active", x.dataset.pane === currentPane));
  updateRoute();
  renderPane();
}

function renderPane() {
  const map = {
    entry: renderEntry,
    compare: renderCompare,
    realtime: renderRealtime,
    tide: renderTide,
    prediction: renderPrediction,
    logs: renderLogs,
    result: renderResult,
    odds: renderOdds,
  };
  $("pane").innerHTML = (map[currentPane] || renderEntry)();
}

function rankClass(field, laneNo, lowerBetter = false) {
  const rows = (race().racers || [])
    .map((b) => [Number(b.lane), num(b[field], NaN)])
    .filter((x) => Number.isFinite(x[1]));
  rows.sort((a, b) => lowerBetter ? a[1] - b[1] : b[1] - a[1]);
  const rank = rows.findIndex((x) => x[0] === Number(laneNo)) + 1;
  return rank === 1 ? "rank1" : rank === 2 ? "rank2" : "";
}

function statBox(label, value, cls = "") {
  return `<div class="stat ${cls}"><span>${label}</span><b>${safe(value)}</b></div>`;
}

function finishClass(finish) {
  const f = String(finish || "");
  if (/^[12]/.test(f)) return "good";
  if (/^[34]/.test(f)) return "mid";
  if (/^[56]/.test(f)) return "bad";
  if (/[転妨失欠ＦFエ]/.test(f)) return "trouble";
  return "";
}

function parsePayloadDate(value) {
  const s = String(value || "").trim().replaceAll("/", "-");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(`${s}T00:00:00+09:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function addDays(date, days) {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + days);
  return d;
}

function shortDateLabel(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function groupDayNumber(group, index) {
  const label = String(group?.day || "");
  if (label.includes("初日")) return 1;
  const n = Number(label.match(/\d+/)?.[0]);
  return Number.isFinite(n) && n > 0 ? n : index + 1;
}

function seasonDayLabel(group, index, groups) {
  const base = safe(group?.day || `${index + 1}日目`);
  if (group?.date) return `${base} ${group.date}`;
  const payloadDate = parsePayloadDate(currentPayload?.date || manifest?.date);
  if (!payloadDate) return base;
  const currentDay = Number(race()?.eventDay || currentPayload?.eventDay || 0) || (groups?.length || 0) + 1;
  const dayNo = groupDayNumber(group, index);
  const date = addDays(payloadDate, dayNo - currentDay);
  return `${base} ${shortDateLabel(date)}`;
}
function normalizeSeasonGroups(b) {
  if (Array.isArray(b.season_groups) && b.season_groups.length) return b.season_groups;
  const runs = Array.isArray(b.season_runs) ? b.season_runs : [];
  const groups = [];
  for (let i = 0; i < runs.length; i += 2) {
    groups.push({ day: `${Math.floor(i / 2) + 1}日目`, runs: runs.slice(i, i + 2) });
  }
  return groups;
}

function seasonCourse(run) {
  return safe(run?.course || run?.entry_course || run?.frame || run?.lane);
}

function seasonCourseLabel(run) {
  const course = seasonCourse(run);
  return course === "-" ? "コース-" : `${course}C`;
}

function seasonRunCard(run) {
  if (!run) return `<div class="season-run-card empty"><div class="meta">-</div><div class="finish">-</div></div>`;
  return `<div class="season-run-card ${finishClass(run.finish)}">
    <div class="meta"><b>${safe(run.race)}</b> / ${seasonCourseLabel(run)}<br>ST ${safe(run.st)}</div>
    <div class="finish">${safe(run.finish)}</div>
  </div>`;
}

function seasonBoard(b) {
  const groups = normalizeSeasonGroups(b);
  if (!groups.length) return `<div class="note">節間成績なし</div>`;
  return `<div class="season-board">${groups.map((g) => `<div class="season-day-row">
    <div class="season-day-head">${seasonDayLabel(g, groups.indexOf(g), groups)}</div>
    ${seasonRunCard((g.runs || [])[0])}
    ${seasonRunCard((g.runs || [])[1])}
  </div>`).join("")}</div>`;
}

function courseLabel(b) {
  const s = String(b.course_strength || "");
  if (s) return s;
  const top3 = num(b.course_top3_rate, NaN);
  if (!Number.isFinite(top3)) return "データ待ち";
  if (top3 >= 60) return "得意";
  if (top3 <= 30) return "苦手";
  return "標準";
}

function courseClass(label) {
  return String(label).includes("得意") ? "good" : String(label).includes("苦手") ? "bad" : "normal";
}

function courseSummary(b) {
  const label = courseLabel(b);
  const course = safe(b.entry_course || b.course || b.lane);
  const diff = b.course_top3_diff === undefined || b.course_top3_diff === "" ? "" : ` / 平均差 ${safe(b.course_top3_diff)}pt`;
  return `<div class="coursebox">
    <b>${course}コース適性：<span class="${courseClass(label)}">${label}</span></b><br>
    件数 ${safe(b.course_starts)} / 1着 ${safe(b.course_win_rate)}% / 3連 ${safe(b.course_top3_rate)}% / 信頼 ${safe(b.course_reliability)}${diff}
  </div>`;
}

function renderEntry() {
  const r = race();
  return `<div class="card"><h2>${r.race}R 締切 ${safe(r.deadline)} <span class="note">${safe(r.type, "")}</span></h2>
  ${(r.racers || []).map((b) => `<div class="boat">${lane(b.lane)}<div>
    <div class="name">${safe(b.name)}${b.female ? " 💗" : ""}<span class="${gradeClass(b.class)}">${safe(b.class, "")}</span>${fBadge(b)}</div>
    <div class="sub">${safe(b.age)}歳 / ${safe(b.weight)}kg　${safe(b.branch)}支部 / ${safe(b.home)}出身 / ${safe(b.f, "")}</div>
    <div class="stats">
      <div class="stat"><span>全国</span><b>${safe(b.nat_win)}</b></div>
      <div class="stat"><span>当地</span><b>${safe(b.local_win)}</b></div>
      <div class="stat"><span>平均ST</span><b>${safe(b.avg_st)}</b></div>
    </div>
    <div class="stats">
      <div class="stat"><span>モーター</span><b>No.${safe(b.motor_no)}</b></div>
      ${statBox("2連率", b.motor_2, rankClass("motor_2", b.lane))}
      ${statBox("3連率", b.motor_3, rankClass("motor_3", b.lane))}
    </div>
    ${courseSummary(b)}
    <div class="season">節間成績 ${b.hayami ? `<span class="note"> / 早見 ${b.hayami}</span>` : ""}${seasonBoard(b)}</div>
  </div></div>`).join("")}</div>`;
}

function gradeScore(b) {
  return ({ A1: 80, A2: 65, B1: 45, B2: 30 }[b.class] ?? 40) + num(b.nat_win) * 4;
}

function motorScore(b) {
  return rateNum(b.motor_2) * 0.45 + rateNum(b.motor_3) * 0.55;
}

function localScore(b) {
  return num(b.local_win) * 10;
}

function localStScore(b) {
  const st = num(b.boaters_local_avg_st || b.local_avg_st || b.avg_st, 9);
  return st >= 9 ? 0 : Math.max(0, 100 - st * 420);
}

function courseScore(b) {
  return num(b.course_top3_rate) * 0.7 + num(b.course_top3_diff) * 0.9 + (String(b.course_reliability) === "A" ? 10 : String(b.course_reliability) === "B" ? 6 : 0);
}

function kimariteInfo(b) {
  const typeMap = {
    escape_type: "逃げ型",
    sashi_type: "差し型",
    makuri_type: "まくり型",
    makuri_zashi_type: "まくり差し型",
    center_attack_type: "センター攻め型",
    mixed_type: "万能型",
    no_win_sample: "勝ちサンプル少",
  };
  const bkStarts = num(b.boaters_kimarite_starts, 0);
  if (bkStarts >= 1) {
    if (Number(b.lane) === 1) {
      const escape = num(b.boaters_escape_rate, NaN);
      const sashare = num(b.boaters_sashare_rate, NaN);
      const makurare = num(b.boaters_makurare_rate, NaN);
      const makurareZashi = num(b.boaters_makurare_zashi_rate, NaN);
      const attacked = Math.max(
        Number.isFinite(sashare) ? sashare : 0,
        Number.isFinite(makurare) ? makurare : 0,
        Number.isFinite(makurareZashi) ? makurareZashi : 0
      );
      const score = (Number.isFinite(escape) ? escape : 0) - attacked * 0.25;
      return {
        score,
        main: `逃げ ${Number.isFinite(escape) ? escape.toFixed(1) : "-"}%`,
        sub: `差され ${Number.isFinite(sashare) ? sashare.toFixed(1) : "-"}% / まくられ差 ${Number.isFinite(makurareZashi) ? makurareZashi.toFixed(1) : "-"}% / ${bkStarts}走`,
      };
    }
    const s = num(b.boaters_sashi_rate, NaN), m = num(b.boaters_makuri_rate, NaN), ms = num(b.boaters_makuri_sashi_rate, NaN);
    const score = Math.max(Number.isFinite(s) ? s : 0, Number.isFinite(m) ? m : 0, Number.isFinite(ms) ? ms : 0);
    return {
      score,
      main: `差 ${Number.isFinite(s) ? s.toFixed(1) : "-"}% / ま ${Number.isFinite(m) ? m.toFixed(1) : "-"}%`,
      sub: `ま差 ${Number.isFinite(ms) ? ms.toFixed(1) : "-"}% / 逃し ${safe(b.boaters_nigashi_rate)}% / ${bkStarts}走`,
    };
  }
  const kimType = typeMap[b.kimarite_main] || typeMap[b.kimarite_attack_type] || safe(b.kimarite_main || b.kimarite_attack_type, "");
  const sample = `${safe(b.kimarite_starts)}走 / 勝 ${safe(b.kimarite_wins)}`;
  if (Number(b.lane) === 1) {
    const v = num(b.escape_rate, NaN);
    return { score: Number.isFinite(v) ? v : 0, main: `逃げ ${Number.isFinite(v) ? v.toFixed(1) : "-"}%`, sub: kimType ? `${kimType} / ${sample}` : sample };
  }
  const s = num(b.sashi_rate, NaN), m = num(b.makuri_rate, NaN), ms = num(b.makuri_sashi_rate, NaN);
  const score = Math.max(Number.isFinite(s) ? s : 0, Number.isFinite(m) ? m : 0, Number.isFinite(ms) ? ms : 0);
  return { score, main: `${kimType ? kimType + " " : ""}差 ${Number.isFinite(s) ? s.toFixed(1) : "-"}% / ま ${Number.isFinite(m) ? m.toFixed(1) : "-"}%`, sub: `ま差 ${Number.isFinite(ms) ? ms.toFixed(1) : "-"}% / ${sample}` };
}

function seasonScore(b) {
  const runs = normalizeSeasonGroups(b).flatMap((g) => g.runs || []);
  if (!runs.length) return 0;
  let score = 45, stSum = 0, stCnt = 0;
  for (const run of runs) {
    const fin = Number(String(run.finish || "").match(/[1-6]/)?.[0]);
    if (fin) score += fin === 1 ? 22 : fin === 2 ? 14 : fin === 3 ? 8 : fin >= 5 ? -10 : -2;
    const st = num(run.st, NaN);
    if (Number.isFinite(st)) {
      stSum += st;
      stCnt++;
    }
  }
  if (stCnt) {
    const avg = stSum / stCnt;
    score += avg <= 0.12 ? 14 : avg <= 0.15 ? 7 : avg >= 0.22 ? -10 : avg >= 0.19 ? -5 : 0;
  }
  return score;
}

function seasonCompareInfo(b) {
  const groups = normalizeSeasonGroups(b);
  const runs = groups.flatMap((g) => g.runs || []);
  if (!runs.length) return { score: 0, main: "-", sub: "節間なし" };
  let top3 = 0, stSum = 0, stCnt = 0;
  for (const run of runs) {
    if (/^[123]/.test(String(run.finish || ""))) top3++;
    const st = num(run.st, NaN);
    if (Number.isFinite(st)) {
      stSum += st;
      stCnt++;
    }
  }
  const board = groups.map((g) => `<div class="cs-day">
    <div class="cs-day-label">${seasonDayLabel(g, groups.indexOf(g), groups)}</div>
    <div class="cs-runs">${(g.runs || []).map((run) => `<span class="cs-run ${finishClass(run.finish)}" title="${seasonDayLabel(g, groups.indexOf(g), groups)} ${safe(run.race)} ${seasonCourseLabel(run)} ST${safe(run.st)} ${safe(run.finish)}">
      <span>${safe(run.race)}</span><b>${seasonCourseLabel(run)}</b><strong>${safe(run.finish)}</strong><em>ST ${safe(run.st)}</em>
    </span>`).join("") || `<span class="cs-run empty">-</span>`}</div>
  </div>`).join("");
  const avg = stCnt ? "." + String(Math.round((stSum / stCnt) * 100)).padStart(2, "0") : "-";
  return { score: seasonScore(b), main: `<div class="compare-season-board">${board}</div>`, sub: `3内 ${top3}/${runs.length}・平均ST ${avg}` };
}

function compareMark(score) {
  return score >= 82 ? "◎" : score >= 66 ? "○" : score >= 48 ? "△" : "-";
}

function compareRank(rows, key, laneNo) {
  const arr = rows.map((x) => [x.lane, x[key].score]).filter((x) => Number.isFinite(x[1])).sort((a, b) => b[1] - a[1]);
  const rank = arr.findIndex((x) => Number(x[0]) === Number(laneNo)) + 1;
  return rank === 1 ? "rank1" : rank === 2 ? "rank2" : "";
}

function compareCell(rows, row, key) {
  const c = row[key], cls = compareRank(rows, key, row.lane);
  return `<td><div class="compare-cell ${cls}"><div class="compare-main">${c.main}</div><div class="compare-sub">${c.sub}</div></div></td>`;
}

function renderCompare() {
  const r = race();
  const rows = (r.racers || []).map((b) => {
    const ki = kimariteInfo(b), si = seasonCompareInfo(b);
    const localSt = b.boaters_local_avg_st || b.local_avg_st || b.avg_st;
    return {
      lane: b.lane,
      name: b.name,
      grade: { score: gradeScore(b), main: `${compareMark(gradeScore(b))} ${safe(b.class)}`, sub: `全国 ${safe(b.nat_win)}` },
      kimarite: { score: ki.score, main: ki.main, sub: ki.sub },
      motor: { score: motorScore(b), main: `${compareMark(motorScore(b))} No.${safe(b.motor_no)}`, sub: `2連 ${safe(b.motor_2)} / 3連 ${safe(b.motor_3)}` },
      local: { score: localScore(b), main: `${compareMark(localScore(b))} ${safe(b.local_win)}`, sub: "当地勝率" },
      localSt: { score: localStScore(b), main: `${compareMark(localStScore(b))} ${safe(localSt)}`, sub: `当地平均ST / ${safe(b.boaters_local_st_rank || b.local_st_order)}` },
      course: { score: courseScore(b), main: `${compareMark(courseScore(b))} ${courseLabel(b)}`, sub: `3連 ${safe(b.course_top3_rate)}% / 差 ${safe(b.course_top3_diff)}pt` },
      season: si,
    };
  });
  return `<div class="card"><h2>${r.race}R 選手比較</h2>
    <div class="note">各項目を簡易スコア化。列ごとに1位は薄い赤、2位は薄い黄色で表示します。</div>
    <div class="compare-wrap"><table class="compare-table">
      <tr><th>名前</th><th>格</th><th>決まり手</th><th>モーター</th><th>当地</th><th>当地ST</th><th>コース適性</th><th>節間成績</th></tr>
      ${rows.map((row) => `<tr><td>${lane(row.lane)} <b>${safe(row.name)}</b></td>${compareCell(rows,row,"grade")}${compareCell(rows,row,"kimarite")}${compareCell(rows,row,"motor")}${compareCell(rows,row,"local")}${compareCell(rows,row,"localSt")}${compareCell(rows,row,"course")}${compareCell(rows,row,"season")}</tr>`).join("")}
    </table></div>
  </div>`;
}

function tableFromRows(title, rows, columns) {
  if (!rows?.length) return `<div class="card"><h2>${title}</h2><div class="note">まだ未取得です。</div></div>`;
  return `<div class="card"><h2>${title}</h2><table><tr>${columns.map((c) => `<th>${c.label}</th>`).join("")}</tr>
    ${rows.map((row) => `<tr>${columns.map((c) => `<td>${safe(row[c.key])}</td>`).join("")}</tr>`).join("")}</table></div>`;
}

function normalizeRealtimeRows(obj) {
  if (Array.isArray(obj)) return obj;
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj).map(([laneNo, value]) => {
    if (value && typeof value === "object") return { lane: value.lane || laneNo, ...value };
    return { lane: laneNo, value };
  });
}

function rowMap(obj) {
  const rows = normalizeRealtimeRows(obj);
  const map = {};
  for (const x of rows) {
    const n = Number(x.entry || x.frame || x.boat || x.boat_no || x.lane);
    if (n) map[n] = x;
  }
  return map;
}

function realtimeCourse(row, fallback) {
  return num(row?.start_course || row?.startCourse || row?.course || (row?.entry ? row?.lane : ""), fallback);
}

function valueRankClass(map, laneNo, key, lowerBetter = true) {
  const arr = [1,2,3,4,5,6].map((n) => [n, num(map[n]?.[key], NaN)]).filter((x) => Number.isFinite(x[1]));
  arr.sort((a, b) => lowerBetter ? a[1] - b[1] : b[1] - a[1]);
  const rank = arr.findIndex((x) => x[0] === Number(laneNo)) + 1;
  return rank === 1 ? "rank1" : rank === 2 ? "rank2" : "";
}

function timeBadge(value, cls = "") {
  return `<span class="time-badge ${cls}">${safe(value)}</span>`;
}

function renderSlit(realtime) {
  const last = rowMap(realtime.last || realtime.lastMinute || realtime.before || realtime.direct || realtime.slit || realtime.start || realtime.st || []);
  const rows = Object.keys(last).length ? [1,2,3,4,5,6].filter((n) => last[n]) : [];
  if (!rows.length) return `<h3>スリット隊形</h3><div class="note">スリット情報はまだ未取得です。</div>`;
  const line = 66;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const slitSt = (n) => firstValue(last[n]?.st_raw, last[n]?.st, last[n]?.ST);
  const pos = (n) => {
    const raw = String(firstValue(last[n]?.st_raw, last[n]?.st, last[n]?.ST, "")).trim();
    const v = num(raw, NaN);
    if (!Number.isFinite(v)) return 45;
    if (raw.startsWith("F")) return clamp(line + Math.abs(v) * 70, line + 3, 82);
    return clamp(line - v * 185, 28, line - 2);
  };
  const order = rows.sort((a, b) => realtimeCourse(last[a], a) - realtimeCourse(last[b], b));
  const changed = order.some((n, i) => n !== i + 1);
  return `<h3>スリット隊形 ${changed ? '<span class="note">進入変更あり</span>' : ""}</h3>
    <div class="slit">${order.map((n, i) => `<div class="slit-row" style="top:${20 + i * 30}px">
      <div class="slit-lane">${lane(n)}<small>${realtimeCourse(last[n], n)}コース</small></div>
      <div class="boatmark" style="left:calc(${pos(n)}% - 14px);background:${boatColor(n)};color:${n === 1 || n === 5 ? "#111" : "#fff"}">${n}</div>
      <div class="slit-st ${String(firstValue(last[n]?.st_raw, last[n]?.st, "")).startsWith("F") ? "f" : ""}">${safe(slitSt(n))}</div>
    </div>`).join("")}</div>`;
}

function renderRealtime() {
  const p = pred();
  const rt = p.realtime || {};
  const last = rowMap(rt.last || rt.lastMinute || rt.before || rt.direct);
  const original = rowMap(rt.original || rt.originalExhibition || rt.sum || rt.display);
  const weather = rt.weather || {};
  const windDirection = weather.windDirection || weather.windDir || weather.wind_dir || weather.wind_direction;
  const windSpeed = weather.wind || weather.windSpeed || weather.wind_speed;
  const waveHeight = weather.wave || weather.waveHeight || weather.wave_height;
  const hasLast = Object.keys(last).length > 0;
  const hasOriginal = Object.keys(original).length > 0;
  return `<div class="card"><h2>直前情報</h2>
      <div class="refresh-row"><button class="refresh-btn" onclick="fetchRealtimeNow()">Boatersから直前・展示を取得して反映</button><button onclick="refreshCurrentVenue()">JSONだけ再読み込み</button><span class="note">PC側のローカルAPIが起動中なら取得から公開まで実行します。</span></div>
      <div class="note">天候 ${safe(weather.weather)} / 風向 ${safe(windDirection)} / 風速 ${safe(windSpeed)}m / 波 ${safe(waveHeight)}cm / 水温 ${safe(weather.water || weather.waterTemp)}℃</div>
      ${hasLast ? `<table><tr><th>枠</th><th>展示</th><th>ST</th><th>チルト</th><th>部品</th></tr>
        ${[1,2,3,4,5,6].map((n) => `<tr><td>${lane(n)}</td><td>${timeBadge(firstValue(last[n]?.time, last[n]?.displayTime), valueRankClass(last, n, firstValue(last[n]?.time, "") !== "" ? "time" : "displayTime"))}</td><td>${safe(firstValue(last[n]?.st_raw, last[n]?.st, last[n]?.ST))}</td><td>${safe(last[n]?.tilt)}</td><td>${safe(last[n]?.part || last[n]?.parts || last[n]?.propeller)}</td></tr>`).join("")}
      </table>` : `<div class="note">直前情報はまだ未取得です。</div>`}
      ${renderSlit(rt)}
      <h3>オリジナル展示</h3>
      ${hasOriginal ? `<table><tr><th>枠</th><th>1周</th><th>回り足</th><th>直線</th><th>展示</th><th>合算</th><th>平均との差</th></tr>
        ${[1,2,3,4,5,6].map((n) => `<tr><td>${lane(n)}</td><td>${timeBadge(original[n]?.lap, valueRankClass(original, n, "lap"))}</td><td>${timeBadge(original[n]?.turn, valueRankClass(original, n, "turn"))}</td><td>${timeBadge(original[n]?.line || original[n]?.straight, valueRankClass(original, n, original[n]?.line ? "line" : "straight"))}</td><td>${timeBadge(original[n]?.show || original[n]?.display, valueRankClass(original, n, original[n]?.show ? "show" : "display"))}</td><td>${timeBadge(original[n]?.sum, valueRankClass(original, n, "sum"))}</td><td>${safe(firstValue(original[n]?.sum_diff, original[n]?.diff))}</td></tr>`).join("")}
      </table>` : `<div class="note">オリジナル展示はまだ未取得です。</div>`}
    </div>
    <div class="card"><h2>水面気象</h2>
      <div class="stats">
        <div class="stat"><span>天候</span><b>${safe(weather.weather)}</b></div>
        <div class="stat"><span>風向</span><b>${safe(windDirection)}</b></div>
        <div class="stat"><span>風速</span><b>${safe(windSpeed)}</b></div>
        <div class="stat"><span>波高</span><b>${safe(waveHeight)}</b></div>
      </div>
      <div class="note">データが取得済みになると、このタブに自動で反映されます。</div>
    </div>`;
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
    <div class="tide-type">${safe(t.tideType)}</div>
    <div class="note">${safe(t.date, "")} / ${safe(t.source, "")}<br>${safe(t.summary, "")}</div>
    <div class="attack">このレースの潮判定：${safe(z.nearest)} / ${safe(z.phase || z.zone)} / ${safe(z.bucket || z.band)}</div>
    ${tideSvg(events)}
    <table><tr><th>種別</th><th>時刻</th><th>潮位</th></tr>${events.map((x) => `<tr><td>${safe(x.type)}</td><td>${safe(x.time)}</td><td>${safe(x.level)}cm</td></tr>`).join("")}</table>
  </div>`;
}

function renderPrediction() {
  const p = pred(), r = p.readability || {}, s = p.predictionStage || {};
  const tickets = p[ticketMode] || [];
  const showDeltas = p.probabilityReviewStatus === "reviewed";
  const flow = p.probabilityFlow || {};
  const stageLabel = (flow.reviewed || showDeltas) ? "本予想" : "仮予想";
  const stageStatus = (flow.reviewed || showDeltas)
    ? "展示・スリット・直前情報を反映して再精査済み"
    : "前データでのエンジン予想。直前・展示取得後に本予想へ更新";
  const stageColor = (flow.reviewed || showDeltas) ? "green" : "yellow";
  const delta = (review, key) => {
    if (!showDeltas) return "";
    const v = num(review?.[key], NaN);
    if (!Number.isFinite(v) || v === 0) return `<span class="prob-delta flat">±0.0</span>`;
    return `<span class="prob-delta ${v > 0 ? "up" : "down"}">${v > 0 ? "+" : ""}${v.toFixed(1)}</span>`;
  };
  const probCell = (n, currentMap, review, valueKey, morningKey, deltaKey) => {
    const baseValue = review?.[morningKey] ?? currentMap?.[n] ?? currentMap?.[String(n)];
    const adjustedValue = review?.[valueKey] ?? currentMap?.[n] ?? currentMap?.[String(n)];
    if (showDeltas) {
      return `<b>${pct1(adjustedValue)}${delta(review, deltaKey)}</b><span class="adjusted-prob">修正前 ${pct1(baseValue)}</span>`;
    }
    return `<b>${pct1(baseValue)}</b><span class="adjusted-prob pending">修正前 -</span>`;
  };
  const probRows = [1,2,3,4,5,6].map((n) => {
    const review = p.probabilityReview?.[n] || p.probabilityReview?.[String(n)] || {};
    return `<tr>
      <td>${lane(n)}</td>
      <td>${probCell(n, p.win, review, "win", "morningWin", "deltaWin")}</td>
      <td>${probCell(n, p.second, review, "second", "morningSecond", "deltaSecond")}</td>
      <td>${probCell(n, p.third, review, "third", "morningThird", "deltaThird")}</td>
    </tr>`;
  }).join("");
  const flowNote = `<div class="flow-steps">
    <span class="done">1 ${flow.baseLabel || "直前前エンジン予想"}</span>
    <span class="${flow.realtimeApplied ? "done" : "wait"}">2 ${flow.realtimeLabel || "展示・スリット・直前反映"}</span>
    <span class="${showDeltas ? "done" : "wait"}">3 ${flow.reviewLabel || "再精査後の調整数字"}</span>
  </div>`;
  const reviewNote = showDeltas
    ? `<div class="note">上段は展示・スリット・直前情報を反映して再精査した修正後、下段は修正前の前データです。</div>`
    : `<div class="note">現在は前データでの仮予想です。展示・スリット・直前情報が入り、再精査済みになると上段に修正後、下段に修正前を表示します。</div>`;
  return `<div class="card">
    <div class="stage ${stageColor}"><div><b>${stageLabel}</b><br>${stageStatus}</div><span>${stageLabel}</span></div>
    <h2>${currentPayload.venue || ""}ロジック予想</h2>
    <div class="probgrid">
      <div class="probcard"><span>SAB</span><b>${safe(p.sab)}</b></div>
      <div class="probcard"><span>荒れ指数</span><b>${pctInt(p.upsetIndex)}</b></div>
      <div class="probcard"><span>攻め役</span><b>${safe(p.attack?.attackLane)}号艇</b></div>
    </div>
    <div class="note">軸候補：${r.axisLane ? r.axisLane + "号艇" : "-"} / ${safe(r.comment, "")}</div>
  </div>
  <div class="card"><h2>全艇確率</h2>${flowNote}${reviewNote}
    <table class="prob-table"><tr><th>枠</th><th>1着</th><th>2着</th><th>3着</th></tr>${probRows}</table>
  </div>
  <div class="card"><h2>買い目</h2>
    <div class="mode"><button class="${ticketMode === "ai" ? "active" : ""}" onclick="ticketMode='ai';renderPane()">AI予想</button><button class="${ticketMode === "aiUpset" ? "active" : ""}" onclick="ticketMode='aiUpset';renderPane()">AI荒れ予想</button></div>
    ${tickets.map((t) => `<div class="ticket"><div><div class="combo">${t.combo}</div><span class="role">${safe(t.role, "")}</span></div><div><span class="note">確率</span><br><b>${pctInt(t.prob)}</b></div><div><span class="note">オッズ</span><br><b>${safe(t.odds)}</b></div></div>`).join("") || `<div class="note">買い目はまだありません。</div>`}
  </div>`;
}

function renderLogs() {
  const p = pred();
  const logs = p.logs || [];
  return `<div class="card"><h2>${currentRaceNo}R 補正ログ</h2>
    ${logs.map((l) => `<div class="log"><div class="log-title">${l.lane ? l.lane + "号艇 " : ""}${safe(l.name || l.stage, "")}</div><div class="log-body">${Array.isArray(l.notes) ? l.notes.join("<br>") : safe(l.reason, "")}</div></div>`).join("") || `<div class="note">補正ログなし</div>`}
  </div>`;
}

function renderResult() {
  const p = pred(), r = p.result || {};
  const hitAi = (r.hitAi || []).length, hitUpset = (r.hitUpset || []).length;
  const order = String(r.order || "").split("-").filter(Boolean);
  const kimariteNote = r.kimariteSource === "inferred" ? `<small>推定</small>` : "";
  return `<div class="card result-main"><h2>レース結果</h2>
    <div class="stage ${r.status === "ok" ? "green" : "yellow"}"><div><b>${r.status === "ok" ? "結果取得済み" : "結果待ち"}</b><br>${r.message || ""}</div><span>${r.status === "ok" ? "確定" : "待機"}</span></div>
    ${r.order ? `<div class="result-line"><div class="result-label">3連単 着順</div><div class="finish-row">${order.map((n, i) => `${i ? '<span class="finish-arrow" aria-hidden="true"></span>' : ""}${finishBoat(n)}`).join("")}</div></div>
      <div class="result-pay"><div class="paybox"><span>払戻</span><b>${safe(r.payout3t)}</b></div><div class="paybox"><span>人気</span><b>${safe(r.popularity3t)}</b></div></div>` :
      `<div class="result-line"><div class="result-label">結果待ち</div><div class="note">締切9分後から結果取得を試します。</div></div>`}
    <div class="result-sub"><div class="paybox"><span>決まり手</span><b>${safe(r.kimarite)}</b>${kimariteNote}</div><div class="paybox"><span>AI予想</span><b>${hitAi ? "的中" : "-"}</b></div><div class="paybox"><span>AI荒れ</span><b>${hitUpset ? "的中" : "-"}</b></div></div>
  </div>`;
}

function oddsBoat(n) {
  const cls = {1:"one",2:"two",3:"three",4:"four",5:"five",6:"six"}[Number(n)] || "";
  return `<span class="odds-boat ${cls}">${n}</span>`;
}

function oddsClass(value) {
  const n = Number(String(value || "").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(n)) return "";
  if (n <= 10) return "hot";
  if (n <= 30) return "warm";
  return "";
}

function renderOdds() {
  const odds = pred().odds || {};
  const entries = Object.entries(odds)
    .map(([key, value]) => ({ key, value, parts: String(key).split("-").map(Number) }))
    .filter((x) => x.parts.length === 3 && x.parts.every((n) => n >= 1 && n <= 6));
  if (!entries.length) return `<div class="card"><h2>3連単オッズ</h2><div class="note">オッズはまだ未取得です。</div></div>`;

  const getOdd = (a, b, c) => {
    const found = odds[`${a}-${b}-${c}`] ?? odds[`${a}${b}${c}`];
    return found === undefined || found === null || found === "" ? "-" : found;
  };
  const panels = [1,2,3,4,5,6].map((first) => {
    const seconds = [1,2,3,4,5,6].filter((n) => n !== first);
    return `<section class="odds-panel">
      <h3>${oddsBoat(first)}<span>1着固定</span></h3>
      <table class="odds-table">
        <tr><th>2着</th><th>3着候補</th></tr>
        ${seconds.map((second) => {
          const thirds = [1,2,3,4,5,6].filter((n) => n !== first && n !== second);
          return `<tr>
            <td class="odds-second">${oddsBoat(second)}</td>
            <td><div class="odds-cells">${thirds.map((third) => {
              const value = getOdd(first, second, third);
              return `<div class="odds-cell ${oddsClass(value)}">${oddsBoat(third)}<b>${safe(value)}</b></div>`;
            }).join("")}</div></td>
          </tr>`;
        }).join("")}
      </table>
    </section>`;
  }).join("");
  return `<div class="card odds-card"><h2>3連単オッズ</h2><div class="odds-note">1着固定で、2着ごとの3着候補を横に並べています。</div><div class="oddsboard">${panels}</div></div>`;
}

function finishBoat(n) {
  const cls = {1:"one",2:"two",3:"three",4:"four",5:"five",6:"six"}[Number(n)] || "";
  return `<span class="finish-boat ${cls}">${n}</span>`;
}

document.querySelectorAll(".tabs button").forEach((b) => b.onclick = () => showView(b.dataset.view));
document.querySelectorAll(".subnav button").forEach((b) => b.onclick = () => {
  currentPane = b.dataset.pane;
  document.querySelectorAll(".subnav button").forEach((x) => x.classList.toggle("active", x === b));
  updateRoute();
  renderPane();
});
$("backTop").onclick = () => showView("top");

init();
