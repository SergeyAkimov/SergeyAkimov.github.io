//плагины
const gulp = require('gulp'),
        pug = require('gulp-pug'),
        sass = require('gulp-sass'),
        minCss = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer'),
        browserSync = require('browser-sync').create(),
        concat = require('gulp-concat'),
        babel = require('gulp-babel'),
        uglify = require('gulp-uglify'),
        //пути сохранения файлов
        build = 'build/' //для базы
        build01 = `projects/01/${build}` //для проекта 01
        buildLocation = build, //выбранный путь из вышеперечисленных
        path = {
            root: buildLocation,
            templates: {
                src: './html/*.pug',
                dest: './'
            },
            styles: {
                // src: ['./node_modules/normalize.css/normalize.css', './css/*.sass'],
                src: './css/*.sass',
                concat: 'common-style.css',
                dest: `${buildLocation}css`
            },
            scripts: {
                src: './scripts/*.js',
                concat: 'common-script.js',
                dest: `${buildLocation}script`
            }
        };

//разметка
function template(){
    return gulp.src(path.templates.src) //взять все файлы pug
        .pipe(pug()) //переписать в html
        .pipe(gulp.dest(path.templates.dest)); //положить куда-то
}

//стили
function style(){
    return gulp.src(path.styles.src) //взять все файлы стилей
        .pipe(sass().on('error', sass.logError)) //переписать в css
        .pipe(concat(path.styles.concat)) //объеденить в один файл
        .pipe(autoprefixer({browsers: ['>0.01%'], cascade: false})) //накинуть префиксы
        .pipe(gulp.dest(path.styles.dest)) //положить куда-то
        .pipe(browserSync.stream());
};

//javascript
function script(){
    return gulp.src(path.scripts.src) //взять все файлы js
        .pipe(concat(path.scripts.concat)) //объеденить в один файл
        .pipe(babel({presets: ['@babel/env']})) //прогнать бабелем
        .pipe(gulp.dest(path.scripts.dest)) //положить куда-то
        .pipe(browserSync.stream());
}

//минификация
function miniCss(){
    return style()
        .pipe(minCss({level: 2})) //минимизировать
        .pipe(gulp.dest(path.styles.dest)); //положить куда-то
}
function miniJs(){
    return script()
        .pipe(uglify()) //минификатор js
        .pipe(gulp.dest(path.scripts.dest)); //положить куда-то
}

//отслежка изменений
function watch(){
    browserSync.init({
        server: `./`
    });
    gulp.watch('./**/*.sass', style); //отслеживаем изменения sass
    gulp.watch('./scripts/*.js', script) //отслеживаем изменения в скриптах
    gulp.watch('./**/*.pug', template).on('change', browserSync.reload); //отслеживаем изменения html
}

//делаем билд
//для разработки
gulp.task('build', gulp.parallel(template, style, script));
gulp.task('dev', gulp.series('build', watch));

//для продакшена
gulp.task('default', gulp.parallel(template, miniCss, miniJs));