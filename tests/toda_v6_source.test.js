const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const indexSource = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

for (const script of [
  "toda_engine_v4.js",
  "toda_engine_adapter_v4.js",
  "toda_site_integration_v4.js",
]) {
  assert.doesNotMatch(indexSource, new RegExp(`<script[^>]+${script}`), `${script} must not be loaded`);
}

console.log("Toda v6 source tests passed");
