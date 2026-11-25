const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("const JSON_RETRY_DELAY_MS");
const end = source.indexOf("function validLiveDocument", start);
assert.ok(start >= 0 && end > start);

const responses = [];
let requestCount = 0;
const context = {
  DATA_BASES: ["https://example.invalid/data"],
  LIVE_DATA_BASES: ["https://example.invalid/data/live"],
  Date,
  JSON,
  Map,
  Promise,
  Number,
  String,
  dataUrls: (pathname) => [`https://example.invalid/data/${pathname}`],
  setTimeout: (callback) => { callback(); return 1; },
  fetch: async () => {
    requestCount += 1;
    return { ok: true, status: 200, json: async () => responses.shift() };
  },
};
vm.createContext(context);
vm.runInContext(
  `${source.slice(start, end)}
   globalThis.acceptFreshJsonForTest = acceptFreshJson;
   globalThis.fetchJsonForTest = fetchJson;`,
  context,
);

const newest = { updatedAt: "2026-11-25T12:00:00+09:00", status: "complete" };
const older = { updatedAt: "2026-11-25T11:59:00+09:00", status: "partial" };
const regressive = { updatedAt: "2026-11-25T12:01:00+09:00", status: "partial" };
assert.equal(JSON.stringify(context.acceptFreshJsonForTest("venue.json", newest)), JSON.stringify(newest));
assert.equal(JSON.stringify(context.acceptFreshJsonForTest("venue.json", older)), JSON.stringify(newest));
assert.equal(JSON.stringify(context.acceptFreshJsonForTest("venue.json", regressive)), JSON.stringify(newest));

(async () => {
  responses.push(older);
  await context.fetchJsonForTest("retry.json");
  responses.push(older, newest);
  const refreshed = await context.fetchJsonForTest("retry.json");
  assert.equal(JSON.stringify(refreshed), JSON.stringify(newest));
  assert.equal(requestCount, 3, "unchanged/old JSON must be retried once after a short delay");
  console.log("JSON freshness and retry tests passed");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
