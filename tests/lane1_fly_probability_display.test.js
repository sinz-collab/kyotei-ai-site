const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(app, /firstValue\(p\.lane1FlyProbability, p\.flyPrediction\?\.probability\)/);
assert.match(app, /<span>1号艇飛び確率<\/span><b>\$\{lane1FlyProbabilityText\(lane1FlyProbability\)\}<\/b>/);
assert.match(app, /if \(v === undefined \|\| v === null \|\| v === ""\) return "—"/);
assert.doesNotMatch(app, /<span>荒れ指数<\/span>/);
assert.doesNotMatch(app, /flyProbabilityCard = currentVenueSlug/);

console.log("Common lane 1 fly probability display passed");
