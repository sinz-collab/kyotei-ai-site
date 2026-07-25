const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("function renderTop()");
const end = source.indexOf("async function openVenue", start);
assert.ok(start >= 0 && end > start);

const nodes = {
  dateTitle: {textContent: ""},
  venueGrid: {innerHTML: ""},
};
const context = {
  manifest: {
    date: "2026-07-25",
    venues: [{
      slug: "toda",
      name: "戸田",
      open: true,
      entryCount: 12,
      firstDeadline: "10:47",
      prediction_status: "unavailable",
      prediction_available: false,
    }],
  },
  esc: String,
  $(id) {
    return nodes[id];
  },
};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)}; renderTop();`, context);

assert.match(nodes.venueGrid.innerHTML, /openVenue\('toda'\)/);
assert.match(nodes.venueGrid.innerHTML, /12R分/);
assert.match(nodes.venueGrid.innerHTML, /予想準備中/);
assert.match(nodes.venueGrid.innerHTML, /当日用予想データ未生成/);
assert.match(nodes.venueGrid.innerHTML, /レース情報を見る/);
assert.doesNotMatch(nodes.venueGrid.innerHTML, /本日データなし/);

assert(source.includes("if (currentPredictionAvailable) {\n    applyLivePredictionReview("));
assert(source.includes("const rt = race().live || p.realtime || {};"));
assert(source.includes("const odds = race().odds || prediction.odds || {};"));
assert(source.includes("const p = pred(), r = race().result || p.result || {};"));
assert(source.includes("架空の確率、SAB、買い目は表示しません。"));

console.log("race data without prediction checks passed");
