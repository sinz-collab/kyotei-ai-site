const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

assert.match(source, /isBiwakoTickets = currentVenueSlug === "biwako"/);
assert.match(source, /AI予想<span>\$\{\(p\.ai \|\| \[\]\)\.length\}点<\/span>/);
assert.match(source, /1号艇飛び予想<span>\$\{\(p\.aiUpset \|\| \[\]\)\.length\}点<\/span>/);
assert.match(source, /: "AI荒れ予想"/);
assert.match(source, /currentVenueSlug === "biwako" \? "1号艇飛び予想" : "AI荒れ"/);

console.log("biwako ticket mode labels and counts passed");
