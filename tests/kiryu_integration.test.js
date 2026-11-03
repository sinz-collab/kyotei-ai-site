const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8").replace(/\r\n?/g, "\n");
const renderStart = source.indexOf("function venueScheduleState(");
const renderEnd = source.indexOf("async function openVenue", renderStart);
assert.ok(renderStart >= 0 && renderEnd > renderStart);

const nodes = { dateTitle: { textContent: "" }, venueGrid: { innerHTML: "" } };
const context = {
  manifest: {
    date: "2026-11-03",
    venues: [{
      slug: "kiryu",
      name: "桐生",
      open: true,
      entryCount: 12,
      firstDeadline: "15:17",
      dataPath: "venues/kiryu/20261103.json",
      predictionStatus: "unavailable",
      predictionAvailable: false,
    }],
  },
  esc: String,
  $(id) { return nodes[id]; },
};
vm.createContext(context);
vm.runInContext(`${source.slice(renderStart, renderEnd)}; renderTop();`, context);

assert.match(nodes.venueGrid.innerHTML, /openVenue\('kiryu'\)/);
assert.match(nodes.venueGrid.innerHTML, /桐生/);
assert.match(nodes.venueGrid.innerHTML, /12R分/);
assert.match(nodes.venueGrid.innerHTML, /予想準備中/);
assert.match(nodes.venueGrid.innerHTML, /レース情報を見る/);

const missingStart = source.indexOf("const missingMark");
const missingEnd = source.indexOf("const esc", missingStart);
const missingContext = { currentVenueSlug: "kiryu" };
vm.createContext(missingContext);
vm.runInContext(`${source.slice(missingStart, missingEnd)}; this.testSafe = safe;`, missingContext);
assert.equal(missingContext.testSafe(undefined), "—");
assert.equal(missingContext.testSafe(""), "—");

assert.match(source, /架空の確率、SAB、買い目は表示しません。/);
assert.match(source, /const names = \["direct", "exhibition", "original_exhibition", "odds", "result"\]/);
assert.match(source, /"karatsu", "kiryu"\]\.includes\(currentVenueSlug\)/);
console.log("Kiryu integration checks passed");
