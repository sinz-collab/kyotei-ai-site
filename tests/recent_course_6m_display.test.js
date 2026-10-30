const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("app.js", "utf8");
const styles = fs.readFileSync("styles.css", "utf8");
const index = fs.readFileSync("index.html", "utf8");

assert.match(app, /recent_course_6m/);
assert.match(app, /statsCourse === actualCourse/);
assert.match(app, /statsRacerId === racerId/);
assert.match(app, /1着.*2連.*3連/);
assert.match(app, /平均ST/);
assert.match(app, /データ不足/);
assert.match(app, /<th>直近6か月<\/th>/);
assert.match(styles, /recent-course-stats/);
assert.match(index, /app\.js\?v=20261031-course-stats-6m/);
assert.match(index, /styles\.css\?v=20261031-course-stats-6m/);

console.log("recent six-month course display tests passed");
