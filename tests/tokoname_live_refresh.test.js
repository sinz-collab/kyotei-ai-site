const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(
  app,
  /if \(!currentVenueSlug \|\| !currentPayload\) return false/,
  "All venues, including Tokoname, must reload their payload after LIVE publishing",
);
assert.match(
  app,
  /isVerifiedTokonameFinalPrediction\(raceData\?\.prediction\)/,
  "Tokoname refresh must accept only verified server-side final predictions",
);
assert.match(
  app,
  /const refreshInterval = 30 \* 1000/,
  "Tokoname final prediction refresh must run every 30 seconds",
);

console.log("Tokoname verified final predictions refresh every 30 seconds");
