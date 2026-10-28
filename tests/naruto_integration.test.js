const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs
  .readFileSync(path.join(__dirname, "..", "app.js"), "utf8")
  .replace(/\r\n?/g, "\n");

const renderStart = source.indexOf("function renderTop()");
const renderEnd = source.indexOf("async function openVenue", renderStart);
assert.ok(renderStart >= 0 && renderEnd > renderStart);

const nodes = {
  dateTitle: { textContent: "" },
  venueGrid: { innerHTML: "" },
};
const context = {
  manifest: {
    date: "2026-10-28",
    venues: [{
      slug: "naruto",
      name: "鳴門",
      open: true,
      entryCount: 12,
      firstDeadline: "08:35",
      dataPath: "venues/naruto/20261028.json",
      predictionStatus: "unavailable",
      predictionAvailable: false,
    }],
  },
  esc: String,
  $(id) {
    return nodes[id];
  },
};
vm.createContext(context);
vm.runInContext(`${source.slice(renderStart, renderEnd)}; renderTop();`, context);

assert.match(nodes.venueGrid.innerHTML, /openVenue\('naruto'\)/);
assert.match(nodes.venueGrid.innerHTML, /鳴門/);
assert.match(nodes.venueGrid.innerHTML, /12R分/);
assert.match(nodes.venueGrid.innerHTML, /予想準備中/);
assert.match(nodes.venueGrid.innerHTML, /レース情報を見る/);

const missingStart = source.indexOf("const missingMark");
const missingEnd = source.indexOf("const esc", missingStart);
const missingContext = { currentVenueSlug: "naruto" };
vm.createContext(missingContext);
vm.runInContext(
  `${source.slice(missingStart, missingEnd)}; this.testSafe = safe;`,
  missingContext,
);
assert.equal(missingContext.testSafe(undefined), "—");
assert.equal(missingContext.testSafe(""), "—");
assert.equal(missingContext.testSafe("取得済み"), "取得済み");

assert.match(
  source,
  /\["tokoname", "toda", "ashiya", "wakamatsu", "shimonoseki", "fukuoka", "karatsu", "naruto"\]/,
);
assert.match(source, /架空の確率、SAB、買い目は表示しません。/);
assert.match(source, /const names = \["direct", "exhibition", "original_exhibition", "odds", "result"\]/);
assert.match(source, /await Promise\.all\(names\.map/);

console.log("Naruto integration checks passed");
