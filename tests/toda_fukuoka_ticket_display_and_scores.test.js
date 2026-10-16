const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const scores = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");

const setsStart = app.indexOf("function dedicatedFlyTicketSets");
const setsEnd = app.indexOf("const lane1FlyProbabilityText", setsStart);
const displayContext = {};
vm.createContext(displayContext);
vm.runInContext(`${app.slice(setsStart, setsEnd)}; globalThis.ticketSets = dedicatedFlyTicketSets;`, displayContext);

const main = Array.from({ length: 6 }, (_, index) => ({ combo: `1-2-${index + 1}`, role: "本線" }));
const deviation = Array.from({ length: 2 }, (_, index) => ({ combo: `2-1-${index + 3}`, role: "ズレ" }));
const scenario = [
  { combo: "3-1-2", role: "シナリオ穴" },
  { combo: "4-1-2", role: "シナリオ穴" },
];
const fly = Array.from({ length: 10 }, (_, index) => ({ combo: index === 0 ? "3-1-2" : `2-${(index % 5) + 1}-${((index + 1) % 5) + 1}`, role: "飛び" }));
const grouped = displayContext.ticketSets({ ai: [...main, ...deviation], aiUpset: scenario, flyPrediction: { tickets: fly } });
assert.equal(grouped.normal.length, 10);
assert.equal(grouped.fly.length, 10);
assert.equal(JSON.stringify(grouped.normal.map((ticket) => ticket.role)), JSON.stringify(["本線", "本線", "本線", "本線", "本線", "本線", "ズレ", "ズレ", "シナリオ穴", "シナリオ穴"]));
assert.equal(grouped.normal.at(-2).combo, grouped.fly[0].combo, "normal/fly duplicate must remain in both lists");

const scoreContext = { Intl, Date };
vm.createContext(scoreContext);
vm.runInContext(scores, scoreContext);
const result = { status: "complete", order: "3-1-2", payout3t: "1,200円", fetchedAt: "2026-10-16T12:10:00+09:00" };
const normalOnly = { phase: "final", generatedAt: "2026-10-16T12:00:00+09:00", ai: [{ combo: "1-2-3" }], aiUpset: [{ combo: "3-1-2" }], flyPrediction: { tickets: [{ combo: "2-1-3" }] } };
const flyOnly = { ...normalOnly, aiUpset: [{ combo: "4-1-2" }], flyPrediction: { tickets: [{ combo: "3-1-2" }] } };
const both = { ...normalOnly, flyPrediction: { tickets: [{ combo: "3-1-2" }] } };
const miss = { ...normalOnly, aiUpset: [{ combo: "4-1-2" }] };

const normalRow = scoreContext.scoresRow(1, { predictionFinal: normalOnly }, null, result, "toda");
const flyRow = scoreContext.scoresRow(2, { predictionFinal: flyOnly }, null, result, "fukuoka");
const bothRow = scoreContext.scoresRow(3, { predictionFinal: both }, null, result, "toda");
assert.equal(normalRow.hit, true);
assert.equal(normalRow.hitType, "normal");
assert.equal(flyRow.hit, true);
assert.equal(flyRow.hitType, "fly");
assert.equal(bothRow.hit, true);
assert.equal(bothRow.hitType, "both");
assert.equal(scoreContext.scoresRow(4, { predictionFinal: miss }, null, result, "fukuoka").hit, false);
assert.equal(scoreContext.scoresRow(5, { predictionFinal: flyOnly }, null, result, "biwako").hit, false, "other venues must not use dedicated fly tickets");

const rows = [normalOnly, flyOnly, both, miss].map((prediction, index) =>
  scoreContext.scoresRow(index + 1, { predictionFinal: prediction }, null, result, index % 2 ? "fukuoka" : "toda"));
assert.deepEqual({ ...scoreContext.scoresTotal(rows) }, { hits: 3, confirmed: 4, payout: 3600 });
assert.deepEqual({ ...scoreContext.scoresHitBreakdown(rows) }, { normal: 1, fly: 1, both: 1 });

const withRate = { ...normalOnly, lane1FlyProbability: 37.74, flyPrediction: { ...normalOnly.flyPrediction, probability: 99 } };
const rateRow = scoreContext.scoresRow(5, { predictionFinal: withRate }, null, { status: "pending" }, "toda");
assert.equal(rateRow.status, "結果待ち");
assert.equal(rateRow.flyRate, 37.74);
assert.match(scoreContext.scoresRaceMeta(rateRow, true), /飛び率 37\.7%/);
assert.match(scoreContext.scoresRaceMeta(normalRow, true), /通常的中/);
assert.match(scoreContext.scoresRaceMeta(flyRow, true), /飛び的中/);
assert.match(scoreContext.scoresRaceMeta(bothRow, true), /両方的中/);
assert.doesNotMatch(scoreContext.scoresRaceMeta(rows[3], true), /scores-hit-label/);
assert.match(scoreContext.scoresRaceMeta(scoreContext.scoresRow(8, {}, null, { status: "pending" }, "fukuoka"), true), /飛び率 --/);

const history = {
  prediction_history: {
    final: [
      { generated_at: "2026-10-16T12:00:00+09:00", prediction: { ...miss, lane1FlyProbability: 42.04 } },
      { generated_at: "2026-10-16T12:20:00+09:00", prediction: { ...normalOnly, lane1FlyProbability: 88.8 } },
    ],
  },
};
const cutoffRow = scoreContext.scoresRow(6, history, null, result, "toda");
assert.equal(cutoffRow.hit, false, "post-result regeneration must not judge the race");
assert.equal(cutoffRow.flyRate, 42.04, "post-result regeneration must not change the displayed fly rate");
const missing = scoreContext.scoresRow(7, {}, null, result, "toda");
assert.equal(missing.hit, false);
assert.equal(missing.note, "公開済み最終買い目なし");

console.log("Toda/Fukuoka normal, fly, both, miss, duplicate, cutoff and missing cases passed");
