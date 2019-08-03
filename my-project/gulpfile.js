//плагины
const gulp = require('gulp'),
        pug = require('gulp-pug'),
        sass = require('gulp-sass'),
        minCss = require('gulp-clean-css'),
        browserSync = require('browser-sync').create(),
        concat = require('gulp-concat'),
        babel = require('gulp-babel'),
        uglify = require('gulp-uglify'),
        buildLocation = 'build/';

//компилятор pug
function html(){
    return gulp.src('./html/*.pug') //взять все файлы pug
        .pipe(pug()) //переписать в html
        .pipe(gulp.dest(`${buildLocation}`)); //положить куда-то
}

//компилятор sass
function style(){
    return gulp.src('./css/*.sass') //взять все файлы sass
        .pipe(sass().on('error', sass.logError)) //переписать в css
        .pipe(concat('common-styles.css')) //объеденить в один файл
        .pipe(minCss({level: 2})) //минимизировать
        .pipe(gulp.dest(`${buildLocation}css`)) //положить куда-то
        .pipe(browserSync.stream());
};

//javascript
function script(){
    return gulp.src('./scripts/*.js') //взять все файлы js
        .pipe(concat('common-script.js')) //объеденить в один файл
        .pipe(babel({presets: ['@babel/env']})) //прогнать бабелем
        .pipe(uglify())
        .pipe(gulp.dest(`${buildLocation}script`)); //положить куда-то
}

//отслежка изменений
function watch(){
    browserSync.init({
        server: `./${buildLocation}`
    });
    gulp.watch('./css/*.sass', style); //отслеживаем изменения sass
    gulp.watch('./scripts/*.js', script).on('change', browserSync.reload); //отслеживаем изменения в скриптах
    gulp.watch('./**/*.pug', html) .on('change', browserSync.reload); //отслеживаем изменения html
}

gulp.task('html', html);
gulp.task('style', style);
gulp.task('script', script);
gulp.task('watch', watch);
gulp.task('default', gulp.parallel(html, style, script, watch));