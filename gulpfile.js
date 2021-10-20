//Подключаем модули Gulp'a
const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const less = require("gulp-less")

//Порядок подключение css файлов
/*
const cssFiles = [
  "./src/css/main.css",
  "./src/css/media.css"
]
*/
const cssFilesMain = [
  "./less/main/header.less",
  "./less/main/body.less",
  "./less/main/main.less",
  "./less/main/hero.less",
  "./less/main/about.less",
  "./less/main/our-friend.less",
  "./less/main/help.less",
  "./less/main/addition.less",
  "./less/main/footer.less",
]
const cssFilesPets = [
  "./less/pets/body.less",
  "./less/pets/header.less",
  "./less/pets/our-friend.less",
  "./less/pets/footer.less",
]

//Порядок подключение js файлов
const jsFiles = [
  "./less/main/main.js",
]
const jsFilesPets = [
  "./less/pets/main.js",
]

function stylesPets() {
  //Шаблон для поиска файлов CSS
  //Всей файлы по шаблону "./src/css/**/*.css"
  return gulp.src(cssFilesPets)
  .pipe(sourcemaps.init())
  .pipe(less())
  //Обьединение файлов в один
  .pipe(concat("pets.css"))
  //Добавить префиксы
  .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
  //Минификация CSS
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(sourcemaps.write("./"))
  //Выходная папка для стилей
  .pipe(gulp.dest("./pages/pets"))
  .pipe(browserSync.stream());
}

//Task на стили CSS
function styles() {
  //Шаблон для поиска файлов CSS
  //Всей файлы по шаблону "./src/css/**/*.css"
  return gulp.src(cssFilesMain)
  .pipe(sourcemaps.init())
  .pipe(less())
  //Обьединение файлов в один
  .pipe(concat("style.css"))
  //Добавить префиксы
  .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
  //Минификация CSS
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(sourcemaps.write("./"))
  //Выходная папка для стилей
  .pipe(gulp.dest("./pages/main"))
  .pipe(browserSync.stream());
}



//Таск на скрипты JS
function scripts() {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону "./src/js/**/*.js"
  return gulp.src(jsFiles)
  //Обьединение файлов в один
  .pipe(concat("script.js"))
  //Минификация JS
  //Выходная папка для стилей
  .pipe(gulp.dest("./pages/main"))
}

//Таск на скрипты JS
function scriptsPets() {
  //Шаблон для поиска файлов JS
  //Всей файлы по шаблону "./src/js/**/*.js"
  return gulp.src(jsFilesPets)
  //Обьединение файлов в один
  .pipe(concat("pets.js"))
  //Минификация JS
  //Выходная папка для стилей
  .pipe(gulp.dest("./pages/pets"))
}

//Удалить всё в указанной папке
function clean() {
  return del(["build/*"])
}

//Просматривать файлы
function watch() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
});
//Следить за CSS файлами
//gulp.watch("./src/css/**/*.css", styles)
gulp.watch("./less/**/*.less", gulp.series(styles,stylesPets))
//Следить за JS файлами
gulp.watch("./less/**/*.js", gulp.series(scripts,scriptsPets))
//При изменении HTML запустить синхронизацию
gulp.watch("./**/*.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task("stylesPets", stylesPets);
//Таск вызывающий функцию styles
gulp.task("styles", styles);

//Таск вызывающий функцию scripts
gulp.task("scripts", scripts);
//Таск вызывающий функцию scripts
gulp.task("scriptsPets", scriptsPets);
//Таск для очистки папки build
gulp.task("del", clean);
//Таск для отслеживания изменений
gulp.task("watch", watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task("build", gulp.series(clean, gulp.parallel(stylesPets,styles,scripts,scriptsPets)));
//Таск запускает таск build и watch последовательно
gulp.task("dev", gulp.series("build","watch"));
