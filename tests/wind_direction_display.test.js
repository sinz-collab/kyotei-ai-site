const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const formatterStart = source.indexOf("const WIND_DIRECTIONS");
const formatterEnd = source.indexOf("function dataUrls", formatterStart);
assert.ok(formatterStart >= 0 && formatterEnd > formatterStart);

const context = {};
vm.createContext(context);
vm.runInContext(
  `${source.slice(formatterStart, formatterEnd)}; globalThis.formatWindDirectionForTest = formatWindDirection;`,
  context,
);

const format = context.formatWindDirectionForTest;
assert.equal(format(1), "↑ 北");
assert.equal(format(2), "↑ 北北東");
assert.equal(format(3), "↗ 北東");
assert.equal(format(4), "↗ 東北東");
assert.equal(format(5), "→ 東");
assert.equal(format(7), "↘ 南東");
assert.equal(format(9), "↓ 南");
assert.equal(format(11), "↙ 南西");
assert.equal(format(13), "← 西");
assert.equal(format(15), "↖ 北西");
assert.equal(format(16), "↑ 北北西");
assert.equal(format(17), "無風");
assert.equal(format("ENE"), "↗ 東北東");
assert.equal(format("北西"), "↖ 北西");
for (const missing of [undefined, null, "", "-", 0, 18, "unknown"]) {
  assert.equal(format(missing), "-");
}

const renderStart = source.indexOf("function renderRealtime()");
const renderEnd = source.indexOf("function tideSvg", renderStart);
const renderSource = source.slice(renderStart, renderEnd);
const slitIndex = renderSource.indexOf("${renderSlit(rt)}");
const weatherIndex = renderSource.indexOf('<div class="card"><h2>水面気象</h2>');
const originalIndex = renderSource.indexOf('<div class="card"><h2>オリジナル展示</h2>');
assert.ok(slitIndex >= 0 && weatherIndex > slitIndex && originalIndex > weatherIndex);
assert.equal((renderSource.match(/windDirectionDisplay/g) || []).length, 3);

console.log("wind direction display tests passed");
