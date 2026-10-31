const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("app.js", "utf8");
const styles = fs.readFileSync("styles.css", "utf8");
const index = fs.readFileSync("index.html", "utf8");

assert.match(app, /recent_course_6m/);
assert.match(app, /statsCourse === actualCourse/);
assert.match(app, /1着率/);
assert.match(app, /2連対率/);
assert.match(app, /3連対率/);
assert.match(app, /平均ST/);
assert.match(app, /判定不可/);
assert.match(app, /直近6か月・コース別成績/);
assert.match(app, /course-six-month-grid/);
assert.match(app, /コース別決まり手/);
assert.match(app, /aptitude_label/);
assert.match(app, /recent_course_6m_by_course/);
assert.match(app, /displayedCourse/);
assert.doesNotMatch(app, /course_top3_diff.*コース適性/);
assert.match(styles, /course-six-month-grid/);
assert.match(styles, /grid-template-columns:repeat\(3/);
assert.match(styles, /@media\(max-width:600px\).*course-six-month-grid\{grid-template-columns:1fr/s);
assert.match(index, /app\.js\?v=20261031-course-aptitude/);
assert.match(index, /styles\.css\?v=20261031-course-aptitude/);

console.log("recent six-month course display tests passed");
