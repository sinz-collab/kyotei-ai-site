const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(
  app,
  /\["ashiya", "wakamatsu", "fukuoka", "tokoname"\]\.includes\(currentVenueSlug\)/,
  "Tokoname must reload its venue payload after final predictions are published",
);
assert.match(
  app,
  /isVerifiedTokonameFinalPrediction\(raceData\?\.prediction\)/,
  "Tokoname refresh must accept only verified server-side final predictions",
);
assert.match(
  app,
  /\["ashiya", "fukuoka", "tokoname", "wakamatsu"\]\.includes\(currentVenueSlug\)[\s\S]*?\? 60 \* 1000/,
  "Tokoname final prediction refresh must run every minute",
);

console.log("Tokoname verified final predictions refresh every minute");
