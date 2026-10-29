const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const app = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const scores = fs.readFileSync(path.join(__dirname, '..', 'scores.js'), 'utf8');

assert.match(app, /const isNarutoFly = currentPayload\?\.venueId === "naruto"/);
assert.match(app, /String\(p\.flyPrediction\?\.modelVersion \|\| ""\)\.startsWith\("naruto_"\)/);
assert.match(app, /\["wakamatsu", "naruto"\]\.includes\(currentPayload\?\.venueId\)/);
assert.match(app, /currentVenueSlug === "naruto"[\s\S]*p\.predictionStage === "live"/);
assert.match(app, /const narutoFlyProbabilityText = \(v\) =>/);
assert.match(app, /value\.toFixed\(2\)/);
assert.match(app, /isDedicatedFlyVenue = .*\|\| isNarutoFly/);
assert.match(scores, /'biwako', 'naruto'/);
assert.match(scores, /\['ashiya', 'naruto'\]\.includes\(venueSlug\).*history\?\.live/);
assert.match(scores, /venueSlug === 'naruto' && p\.predictionStage === 'live'/);
assert.match(app, /1号艇飛び買い目<span>/);
assert.match(app, /<th>枠<\/th><th>1着<\/th><th>2着<\/th><th>3着<\/th>/);
assert.match(app, /オリジナル展示はまだ未取得です/);
assert.match(app, /function renderOdds\(\)/);

console.log('Naruto V5 normal/fly tabs, stage, probabilities, exhibition and odds display passed');
