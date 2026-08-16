const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(source, /function tideAvailable\(\)/);
assert.match(source, /return currentVenueSlug !== "biwako"/);
assert.match(source, /x\.hidden = x\.dataset\.pane === "tide" && !tideAvailable\(\)/);
assert.match(source, /if \(currentVenueSlug === "biwako"\)/);
assert.match(source, /この場では潮位・潮汐グラフを表示しません。/);

console.log("Biwako no-tide display checks passed");
