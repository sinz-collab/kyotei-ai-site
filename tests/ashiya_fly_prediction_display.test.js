const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const scores = fs.readFileSync(path.join(__dirname, "..", "scores.js"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "ashiya"/);
assert.match(app, /p\.flyPrediction\?\.modelVersion === "strength_25_frozen"/);
assert.match(app, /isTodaFly \|\| isFukuokaFly \|\| isAshiyaFly/);
assert.match(app, /currentPayload\?\.venueId === "wakamatsu" \|\| currentPayload\?\.venueId === "ashiya"/);
assert.match(app, /\["toda", "fukuoka", "ashiya"\]\.includes\(currentVenueSlug\)/);
assert.match(scores, /\['toda', 'fukuoka', 'ashiya'\]\.includes\(venueSlug\)/);
assert.match(app, /safe\(currentTrifectaOdds\(t\.combo\)\)/);

const setsStart = app.indexOf("function dedicatedFlyTicketSets");
const setsEnd = app.indexOf("const lane1FlyProbabilityText", setsStart);
const context = {};
vm.createContext(context);
vm.runInContext(`${app.slice(setsStart, setsEnd)}; globalThis.ticketSets = dedicatedFlyTicketSets;`, context);

const main = Array.from({ length: 6 }, (_, index) => ({ combo: `1-2-${index + 1}`, role: "本線" }));
const deviation = Array.from({ length: 2 }, (_, index) => ({ combo: `2-1-${index + 3}`, role: "ズレ" }));
const upset = Array.from({ length: 2 }, (_, index) => ({ combo: `${index + 3}-1-2`, role: "荒れ" }));
const fly = Array.from({ length: 10 }, (_, index) => ({ combo: `2-${(index % 5) + 1}-${((index + 1) % 5) + 1}`, role: "飛び" }));
const grouped = context.ticketSets({ ai: main, balance: deviation, aiUpset: upset, flyPrediction: { tickets: fly } });
assert.equal(grouped.normal.length, 10);
assert.equal(grouped.fly.length, 10);
assert.deepEqual(Array.from(grouped.normal, (ticket) => ticket.role), ["本線", "本線", "本線", "本線", "本線", "本線", "ズレ", "ズレ", "荒れ", "荒れ"]);

const legacyGrouped = context.ticketSets({
  ai: [...main, ...deviation],
  balance: deviation,
  aiUpset: upset,
  flyPrediction: { tickets: fly },
});
assert.equal(legacyGrouped.normal.length, 10);
assert.equal(new Set(Array.from(legacyGrouped.normal, (ticket) => ticket.combo)).size, 10);

console.log("Ashiya normal/fly tabs, probability and live odds contract passed");
