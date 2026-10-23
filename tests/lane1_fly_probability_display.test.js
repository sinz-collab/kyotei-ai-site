const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(app, /firstValue\(p\.lane1FlyProbability, p\.flyPrediction\?\.probability\)/);
assert.match(app, /const lane1FlyStageLabel = currentPayload\?\.venueId === "wakamatsu"/);
assert.match(app, /isFinalStage \? "LIVE" : "朝"/);
assert.match(app, /1号艇飛び確率\$\{lane1FlyStageLabel/);
assert.doesNotMatch(app, /ashiyaFlyProbabilityCard|ashiya-comparison/);
assert.match(app, /currentPayload\?\.venueId === "ashiya"\s*\? pct1\(lane1FlyProbability\)/);
assert.match(app, /const flyProbabilityCard = `<div class="probcard lane1-fly \$\{lane1FlyClass\}"/);
assert.match(app, /raceData\?\.prediction\?\.lane1FlyProbability/);
assert.match(app, /if \(v === undefined \|\| v === null \|\| v === ""\) return "—"/);
assert.doesNotMatch(app, /<span>荒れ指数<\/span>/);
assert.doesNotMatch(app, /flyProbabilityCard = currentVenueSlug/);

console.log("Common lane 1 fly probability display passed");
