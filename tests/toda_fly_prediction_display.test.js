const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /flyPrediction: source\.flyPrediction/);
assert.match(app, /\["pre", "final"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /dedicatedFlyTicketSets\(p\)/);
assert.match(app, /1号艇飛び確率/);
assert.match(app, /飛び優勢/);
assert.match(app, /逃げ優勢/);
assert.match(app, /const usesFlyTicketTabs = isWakamatsuFly \|\| isDedicatedFlyVenue/);
assert.match(app, /<h2>買い目<\/h2>/);
assert.match(app, /AI買い目<span>/);
assert.match(app, /1号艇飛び買い目<span>/);
assert.match(app, /const tickets = p\[ticketMode\] \|\| \[\]/);
assert.match(app, /ticketMode === "ai" \? dedicatedTicketSets\.normal : dedicatedFlyTickets/);
assert.match(app, /safe\(currentTrifectaOdds\(t\.combo\)\)/);
assert.match(app, /function selectTicketMode\(nextMode\)/);
assert.match(app, /ticketMode = nextMode;\s+renderPane\(\);/);
assert.doesNotMatch(app, /class="toda-ticket-scroll"/);
assert.doesNotMatch(app, /class="toda-ticket-grid"/);
assert.doesNotMatch(app, /通常AI買い目（10点）/);
assert.doesNotMatch(app, /<h2>1号艇飛び専用10点/);
assert.doesNotMatch(css, /\.toda-ticket-scroll/);
assert.doesNotMatch(css, /\.toda-ticket-grid/);
assert.doesNotMatch(app, /function predictionTicketsForDisplay/);

const oddsStart = app.indexOf("function currentTrifectaOdds");
const oddsEnd = app.indexOf("function formatMoney", oddsStart);
assert.ok(oddsStart >= 0 && oddsEnd > oddsStart);
const context = {
  race: () => ({ odds: { "4-1-6": 12.3, 421: 45.6 } }),
  pred: () => ({ odds: {} }),
};
vm.createContext(context);
vm.runInContext(
  `${app.slice(oddsStart, oddsEnd)}; globalThis.lookup = currentTrifectaOdds;`,
  context,
);
assert.equal(context.lookup("4-1-6"), 12.3);
assert.equal(context.lookup("4-2-1"), 45.6);
assert.equal(context.lookup("6-5-4"), "-");

console.log("Toda fly probability and Wakamatsu-style ticket tabs passed");
