const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(source, /top3: source\.probabilities\?\.top3 \|\| source\.top3 \|\| \{\}/);
assert.match(source, /const hasTop3Probabilities = p\.top3 && Object\.keys\(p\.top3\)\.length === 6/);
assert.match(source, /hasTop3Probabilities \? "<th>3着内<\/th>" : ""/);

console.log("Biwako top-3 probability display checks passed");
