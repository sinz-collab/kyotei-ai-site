const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("function finishClass");
const end = source.indexOf("function parsePayloadDate", start);
assert.ok(start >= 0 && end > start);

const context = {};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)}; this.finishClassForTest = finishClass;`, context);

for (const finish of ["転", "妨", "落", "失", "不", "F", "Ｆ", "L", "Ｌ", "欠", "エ", "沈"]) {
  assert.equal(context.finishClassForTest(finish), "trouble", finish);
}
for (const finish of ["1着", "3着", "6着"]) {
  assert.notEqual(context.finishClassForTest(finish), "trouble", finish);
}

assert.match(source, /<strong>\$\{safe\(run\.finish\)\}<\/strong>/);
assert.match(source, /<div class="finish">\$\{safe\(run\.finish\)\}<\/div>/);

const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
assert.match(styles, /\.cs-run\.trouble/);
assert.match(styles, /@media\s*\(max-width:\s*600px\)/);

const scoresSource = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");
const element = () => ({
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() {} },
  dataset: {},
  insertAdjacentHTML() {},
  style: {},
});
const elements = new Map();
const renderContext = {
  console,
  URLSearchParams,
  setInterval: () => 1,
  clearInterval() {},
  setTimeout,
  fetch: async () => ({ ok: true, json: async () => ({ date: "2026-11-09", venues: [] }) }),
  history: { replaceState() {} },
  location: { pathname: "/", search: "", hash: "" },
  document: {
    hidden: false,
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, element());
      return elements.get(id);
    },
    querySelectorAll: () => [],
  },
  window: {
    matchMedia: () => ({ matches: true }),
    getComputedStyle: () => ({ overflowX: "visible" }),
  },
};
renderContext.window.window = renderContext.window;
vm.createContext(renderContext);
vm.runInContext(scoresSource, renderContext);
vm.runInContext(`${source}
globalThis.setSetsukanTestState = (payload) => {
  currentVenueSlug = "naruto";
  currentPayload = payload;
  currentRaceNo = 4;
};
globalThis.seasonBoardForTest = seasonBoard;
globalThis.seasonCompareInfoForTest = seasonCompareInfo;`, renderContext);

const takeda = {
  lane: 1,
  name: "竹田 和哉",
  season_groups: [
    { day: "初日", runs: [{ race: "1R", course: "6", st: ".11", finish: "3着" }] },
    { day: "2日目", runs: [
      { race: "3R", course: "3", st: ".09", finish: "転" },
      { race: "11R", course: "2", st: ".09", finish: "3着" },
    ] },
    { day: "3日目", runs: [{ race: "5R", course: "4", st: ".17", finish: "4着" }] },
  ],
};
renderContext.setSetsukanTestState({
  date: "2026-11-09",
  eventDay: 4,
  races: [{ race: 4, eventDay: 4, racers: [takeda] }],
});
for (const html of [
  renderContext.seasonBoardForTest(takeda),
  renderContext.seasonCompareInfoForTest(takeda).main,
]) {
  assert.match(html, /2日目 11\/7/);
  assert.match(html, /3R/);
  assert.match(html, /転/);
  assert.match(html, /trouble/);
}

console.log("Setsukan special-result desktop/mobile display contract passed");
