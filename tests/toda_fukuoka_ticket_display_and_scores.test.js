const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const scores = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(scores, /scores-race-status[\s\S]*scores-hit-slot[\s\S]*row\.order/, "hit label must be between status and result");
assert.match(scores, /scoresHitBreakdownHtml\(allRows\)/, "the page summary must show all three hit categories");
assert.match(scores, /\$\{scoresHitBreakdownHtml\(rows\)\}/, "every venue summary must show all three hit categories");
assert.match(css, /\.scores-row\{[^}]*grid-template-columns:28px minmax\(0,1fr\) 64px 50px 68px/);

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
const biwakoFlyRow = scoreContext.scoresRow(5, { predictionFinal: flyOnly }, null, result, "biwako");
assert.equal(biwakoFlyRow.hitType, "fly", "Biwako must judge its dedicated fly tickets separately");

const biwakoBothShape = { ...both, tickets: [{ combo: "1-2-3" }], ai: [{ combo: "1-2-3" }], aiUpset: [{ combo: "3-1-2" }] };
const biwakoFlyOnly = scoreContext.scoresRow(6, { predictionFinal: biwakoBothShape }, null, result, "biwako");
assert.equal(biwakoFlyOnly.hitType, "fly", "Biwako's aiUpset mirror must not be counted as a normal hit");

const wakamatsuBoth = { phase: "final", tickets: [{ combo: "3-1-2" }], flyPrediction: { tickets: [{ combo: "3-1-2" }] } };
assert.equal(scoreContext.scoresRow(7, { predictionFinal: wakamatsuBoth }, null, result, "wakamatsu").hitType, "both");

const noFlyTickets = { phase: "final", tickets: [{ combo: "3-1-2" }], lane1FlyProbability: 41.2, flyPrediction: { tickets: [] } };
const normalFallback = scoreContext.scoresRow(8, { predictionFinal: noFlyTickets }, null, result, "biwako");
assert.equal(normalFallback.hitType, "normal", "a missing fly ticket set must preserve normal-ticket judgement");
assert.equal(normalFallback.flyRate, 41.2);

const rows = [normalOnly, flyOnly, both, miss].map((prediction, index) =>
  scoreContext.scoresRow(index + 1, { predictionFinal: prediction }, null, result, index % 2 ? "fukuoka" : "toda"));
assert.deepEqual({ ...scoreContext.scoresTotal(rows) }, { hits: 3, confirmed: 4, payout: 3600 });
assert.deepEqual({ ...scoreContext.scoresHitBreakdown(rows) }, { normal: 1, fly: 1, both: 1 });

const withRate = { ...normalOnly, lane1FlyProbability: 37.74, flyPrediction: { ...normalOnly.flyPrediction, probability: 99 } };
const rateRow = scoreContext.scoresRow(5, { predictionFinal: withRate }, null, { status: "pending" }, "toda");
assert.equal(rateRow.status, "結果待ち");
assert.equal(rateRow.flyRate, 37.74);
assert.match(scoreContext.scoresRaceMeta(rateRow, true), /飛び率 37\.7%/);
assert.match(scoreContext.scoresHitLabel(normalRow), /通常的中/);
assert.match(scoreContext.scoresHitLabel(flyRow), /飛び的中/);
assert.match(scoreContext.scoresHitLabel(bothRow), /両方的中/);
assert.match(scoreContext.scoresHitBreakdownHtml([normalRow, flyRow, bothRow]), /class="normal"[^>]*>通常的中 <span>1<\/span>/);
assert.match(scoreContext.scoresHitBreakdownHtml([normalRow, flyRow, bothRow]), /class="fly"[^>]*>飛び的中 <span>1<\/span>/);
assert.match(scoreContext.scoresHitBreakdownHtml([normalRow, flyRow, bothRow]), /class="both"[^>]*>両方的中 <span>1<\/span>/);
assert.equal(scoreContext.scoresHitLabel(rows[3]), "");
assert.equal(scoreContext.scoresHitLabel(rateRow), "");
assert.match(scoreContext.scoresRaceMeta(scoreContext.scoresRow(8, {}, null, { status: "pending" }, "fukuoka"), true), /飛び率 --/);

const otherVenueHit = scoreContext.scoresRow(9, { predictionFinal: normalOnly }, null, result, "heiwajima");
assert.match(scoreContext.scoresHitLabel(otherVenueHit), /通常的中/, "all venues must use the dedicated hit-label column");

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
