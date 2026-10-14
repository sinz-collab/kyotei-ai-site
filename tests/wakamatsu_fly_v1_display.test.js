const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

assert.match(app, /currentPayload\?\.venueId === "wakamatsu"/);
assert.match(app, /p\.flyPrediction\?\.modelVersion === "wakamatsu_fly_tickets_v1"/);
assert.match(app, /Array\.isArray\(p\.tickets\) \? p\.tickets : \[\]/);
assert.match(app, /Array\.isArray\(p\.flyPrediction\?\.tickets\) \? p\.flyPrediction\.tickets : \[\]/);
assert.match(app, /AI買い目<span>\$\{wakamatsuNormalTickets\.length\}点<\/span>/);
assert.match(app, /1号艇飛び買い目<span>\$\{wakamatsuFlyTickets\.length\}点<\/span>/);
assert.match(app, /ticketMode === "ai" \? wakamatsuNormalTickets : wakamatsuFlyTickets/);
assert.match(app, /const probability = firstValue\(t\.probability, isFlyTicket \? undefined : t\.prob\)/);
assert.match(app, /probability === undefined \? "-" : pct1\(probability\)/);
assert.match(app, /<span class="note">予想確率<\/span>/);
assert.doesNotMatch(app, /isFlyTicket \? "スコア" : "予想確率"/);
assert.match(app, /<span class="note">LIVEオッズ<\/span>/);
assert.match(app, /safe\(currentTrifectaOdds\(t\.combo\)\)/);
assert.match(app, /着順率が不足しているため、1号艇飛び買い目は算出できません。/);
assert.match(app, /ticketMode = "ai";/);

assert.match(css, /\.mode\{display:grid;grid-template-columns:repeat\(2,1fr\)/);
assert.match(css, /\.wakamatsu-fly-mode button\{[^}]*min-width:0[^}]*font-size:13px/);

const oddsStart = app.indexOf("function currentTrifectaOdds");
const oddsEnd = app.indexOf("function formatMoney", oddsStart);
assert.ok(oddsStart >= 0 && oddsEnd > oddsStart);
const oddsContext = {
  race: () => ({ odds: { "2-1-3": 12.3, 216: 45.6 } }),
  pred: () => ({ odds: {} }),
};
vm.createContext(oddsContext);
vm.runInContext(
  `${app.slice(oddsStart, oddsEnd)}; globalThis.lookup = currentTrifectaOdds;`,
  oddsContext,
);
assert.equal(oddsContext.lookup("2-1-3"), 12.3);
assert.equal(oddsContext.lookup("2-1-6"), 45.6);
assert.equal(oddsContext.lookup("6-5-4"), "-");

console.log("Wakamatsu fly v1 tabs, normalized probability labels, and live odds display passed");
