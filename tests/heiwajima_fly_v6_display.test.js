const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const scores = fs.readFileSync(path.join(root, "scores.js"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "heiwajima"/);
assert.match(app, /\["morning", "live"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /p\.flyPrediction\?\.modelVersion === "heiwajima_fly_v6_attack_sum_candidate_20261102"/);
assert.match(app, /isDedicatedFlyVenue = .*\|\| isHeiwajimaFly/);
assert.match(app, /currentVenueSlug === "heiwajima" \? 8 : 10/);
assert.match(scores, /SCORES_FLY_VENUES\.add\('heiwajima'\)/);

console.log("heiwajima Fly v6 display tests passed");
