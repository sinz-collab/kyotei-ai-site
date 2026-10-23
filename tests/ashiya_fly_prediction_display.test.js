const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const scores = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "ashiya"/);
assert.match(app, /p\.flyPrediction\?\.modelVersion === "strength_25_frozen"/);
assert.match(app, /isTodaFly \|\| isFukuokaFly \|\| isAshiyaFly/);
assert.doesNotMatch(app, /ashiya-comparison|ashiya-fly-values|ashiya-fly-delta|ashiya-fly-note/);
assert.match(app, /scoresFlyVenue\(currentVenueSlug\)/);
assert.match(scores, /SCORES_FLY_VENUES = new Set\(\['toda', 'fukuoka', 'ashiya', 'tokoname', 'wakamatsu', 'biwako'\]\)/);
assert.match(app, /safe\(currentTrifectaOdds\(t\.combo\)\)/);
assert.match(app, /const lane1FlyProbability = firstValue\(p\.lane1FlyProbability, p\.flyPrediction\?\.probability\)/);
assert.match(app, /currentPayload\?\.venueId === "ashiya"\s*\? pct1\(lane1FlyProbability\)/);
assert.match(app, /const flyProbabilityCard = `<div class="probcard lane1-fly \$\{lane1FlyClass\}"/);

const scoreStart = app.indexOf("function ticketSelectionScorePercent");
const scoreEnd = app.indexOf("function dedicatedFlyTicketSets", scoreStart);
const scoreContext = {};
vm.createContext(scoreContext);
vm.runInContext(`${app.slice(scoreStart, scoreEnd)}; globalThis.scorePercent = ticketSelectionScorePercent;`, scoreContext);
const selection = {
  ordered: [
    { combination: "1-2-3", score: 0.0525 },
    { combination: "1-3-2", score: 7.5 },
  ],
};
assert.equal(scoreContext.scorePercent(selection, "1-2-3"), 5.25);
assert.equal(scoreContext.scorePercent(selection, "1-3-2"), 7.5);
assert.equal(scoreContext.scorePercent(selection, "2-1-3"), undefined);

const setsStart = app.indexOf("function dedicatedFlyTicketSets");
const setsEnd = app.indexOf("const lane1FlyProbabilityText", setsStart);
const context = {};
vm.createContext(context);
vm.runInContext(`${app.slice(setsStart, setsEnd)}; globalThis.ticketSets = dedicatedFlyTicketSets;`, context);

const main = Array.from({ length: 6 }, (_, index) => ({ combo: `1-2-${index + 1}`, role: "本線" }));
const deviation = Array.from({ length: 3 }, (_, index) => ({ combo: `2-1-${index + 3}`, role: "ズレ" }));
const upset = [{ combo: "6-1-2", role: "シナリオ穴" }];
const fly = Array.from({ length: 10 }, (_, index) => ({ combo: `2-${(index % 5) + 1}-${((index + 1) % 5) + 1}`, role: "飛び" }));
const grouped = context.ticketSets({ ai: main, balance: deviation, aiUpset: upset, flyPrediction: { tickets: fly } });
assert.equal(grouped.normal.length, 10);
assert.equal(grouped.fly.length, 10);
assert.deepEqual(Array.from(grouped.normal, (ticket) => ticket.role), ["本線", "本線", "本線", "本線", "本線", "本線", "ズレ", "ズレ", "ズレ", "シナリオ穴"]);
assert.match(app, /ashiya_v51_631/);
assert.match(app, /シナリオ穴/);

const legacyGrouped = context.ticketSets({
  ai: [...main, ...deviation],
  balance: deviation,
  aiUpset: upset,
  flyPrediction: { tickets: fly },
});
assert.equal(legacyGrouped.normal.length, 10);
assert.equal(new Set(Array.from(legacyGrouped.normal, (ticket) => ticket.combo)).size, 10);

console.log("Ashiya normal/fly tabs, probability and live odds contract passed");
