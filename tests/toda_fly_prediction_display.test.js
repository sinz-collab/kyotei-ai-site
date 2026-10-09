const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /flyPrediction: source\.flyPrediction/);
assert.match(app, /\["pre", "final"\]\.includes\(p\.flyPrediction\?\.status\)/);
assert.match(app, /Array\.isArray\(todaFly\?\.tickets\)/);
assert.match(app, /1号艇飛び確率/);
assert.match(app, /飛び優勢/);
assert.match(app, /逃げ優勢/);
assert.match(app, /飛び専用AI買い目/);
assert.match(app, /通常AI買い目とは別枠/);
assert.match(css, /@media\(max-width:390px\)/);
assert.match(css, /\.toda-fly-tickets/);
assert.match(css, /\.toda-ticket-scroll\{[^}]*overflow-x:auto/);
assert.match(css, /\.toda-ticket-grid\{[^}]*grid-template-columns:repeat\(2,minmax\(360px,1fr\)\)/);
assert.match(app, /const tickets = p\[ticketMode\] \|\| \[\]/);
assert.match(app, /currentTrifectaOdds\(ticket\.combo\)/);
assert.match(app, /safe\(currentTrifectaOdds\(ticket\.combo\)\)/);
assert.match(app, /class="toda-ticket-scroll"/);
assert.match(app, /class="toda-ticket-grid"/);
assert.match(app, /ticketMode === "ai" \? "通常AI買い目" : "AI荒れ買い目"/);
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

console.log("Toda fly probability and dedicated ticket display passed");
