const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const start = source.indexOf("function finishClass");
const end = source.indexOf("function parsePayloadDate", start);
assert.ok(start >= 0 && end > start);

const context = {};
vm.createContext(context);
vm.runInContext(`${source.slice(start, end)}; this.finishClassForTest = finishClass;`, context);

for (const finish of ["転", "妨", "落", "失", "不", "F", "Ｆ", "L", "Ｌ", "欠", "エ", "沈"]) {
  assert.equal(context.finishClassForTest(finish), "trouble", finish);
}
for (const finish of ["1着", "3着", "6着"]) {
  assert.notEqual(context.finishClassForTest(finish), "trouble", finish);
}

assert.match(source, /<strong>\$\{safe\(run\.finish\)\}<\/strong>/);
assert.match(source, /<div class="finish">\$\{safe\(run\.finish\)\}<\/div>/);

const styles = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");
assert.match(styles, /\.cs-run\.trouble/);
assert.match(styles, /@media\s*\(max-width:\s*600px\)/);

console.log("Setsukan special-result desktop/mobile display contract passed");
