const { src, dest, watch } = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

function defaultTask() {
  return src(["js/main.js"])
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(dest("dist/"));
}

function watchTask() {
  return watch(
    ["js/main.js"],
    { ignoreInitial: false },
    defaultTask
  ).on("change", function(path, stats) {});
}

exports.default = watchTask;
