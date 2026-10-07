const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
const index = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const start = source.indexOf("function fLabel");
const end = source.indexOf("function boatColor", start);
assert.ok(start >= 0 && end > start);

const context = {};
vm.createContext(context);
vm.runInContext(
  `${source.slice(start, end)}; globalThis.fLabelForTest = fLabel; globalThis.fBadgeForTest = fBadge;`,
  context,
);

const label = context.fLabelForTest;
const badge = context.fBadgeForTest;

assert.equal(label(0), "");
assert.equal(label("0"), "");
assert.equal(label(1), "F");
assert.equal(label("1"), "F");
assert.equal(label(2), "F2");
assert.equal(label("F3"), "F3");
assert.equal(label("-"), "");
assert.equal(badge({ f: "0" }), "");
assert.equal(badge({ f: "0" }, "-"), "-");
assert.match(badge({ f: "1" }), /class="f-badge">F<\/span>/);
assert.match(badge({ f: "2" }), /class="f-badge">F2<\/span>/);

assert.match(source, /function renderEntry\(\)[\s\S]*?\$\{fBadge\(b\)\}/);
assert.match(source, /<th>格<\/th><th>F累積<\/th><th>決まり手<\/th>/);
assert.match(source, /compareCell\(rows,row,"grade"\)[^\n]*<td class="compare-f-cell">\$\{fBadge\(row, "-"\)\}<\/td>\$\{compareCell\(rows,row,"kimarite"\)\}/);
assert.doesNotMatch(source, /class="compare-f-wrap"/);
assert.match(styles, /\.f-badge\{[^}]*background:#dc2626[^}]*color:#fff[^}]*white-space:nowrap/);
assert.match(styles, /\.compare-wrap\{[^}]*overflow-x:auto/);
assert.match(index, /styles\.css\?v=20261007-toda-fly-2/);
assert.match(index, /app\.js\?v=20261007-toda-fly-2/);

console.log("F display tests passed");
