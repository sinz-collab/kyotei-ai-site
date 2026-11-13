const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = app.indexOf("function probabilityReviewFromSnapshots");
const end = app.indexOf("function normalizedExhibitionTime", start);
assert.ok(start >= 0 && end > start);

const context = {
  num(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  },
};
vm.createContext(context);
vm.runInContext(
  `${app.slice(start, end)};
   globalThis.reviewFromSnapshots = probabilityReviewFromSnapshots;
   globalThis.reviewIsComplete = hasCompleteProbabilityReview;`,
  context,
);

const maps = (offset = 0) => Object.fromEntries(
  [1, 2, 3, 4, 5, 6].map((lane) => [String(lane), 100 / 6 + offset]),
);
const morning = { win: maps(), second: maps(), third: maps() };
const live = { win: maps(), second: maps(), third: maps() };
const review = context.reviewFromSnapshots(morning, live);
assert.ok(review);
assert.equal(review["1"].deltaWin, 0);
assert.equal(context.reviewIsComplete({
  probabilityReviewStatus: "reviewed",
  probabilityReview: review,
}), true);

assert.match(app, /currentVenueSlug === "wakamatsu" && useFinalPrediction && prePrediction/);
assert.match(app, /const unit = currentVenueSlug === "wakamatsu" \? "pt" : ""/);
assert.match(app, /±0\.0\$\{unit\}/);
assert.match(app, /\$\{v\.toFixed\(1\)\}\$\{unit\}/);
assert.match(app, /<b>\$\{pct1\(adjustedValue\)\}\$\{delta\(review, deltaKey\)\}<\/b><span class="adjusted-prob">修正前 \$\{pct1\(baseValue\)\}<\/span>/);
assert.doesNotMatch(app, /class="prob-comparison"/);

console.log("Wakamatsu Tokoname-style probability comparison contract passed");
