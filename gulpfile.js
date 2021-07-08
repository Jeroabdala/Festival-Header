const { series, src, dest, watch } = require(`gulp`);
var sass = require("gulp-sass")(require("sass"));

const paths = {
  imagenes: "src/img/**/*",
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
};

function comp() {
  return src(`./src/scss/app.scss`).pipe(sass()).pipe(dest("./buildd/css"));
}

function compNazi() {
  return src(`./src/scss/app.scss`)
    .pipe(sass({ outputStyle: `compressed` }))
    .pipe(dest("./build/css"));
}

function watchFunc() {
  return watch(`./src/scss/**/*.scss`, comp);
}
// * carpeta actual - ** todos los archivos con esa extencion
exports.comp = comp;
exports.compNazi = compNazi;
exports.watchFunc = watchFunc;
