//плагины
const 
    gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    minCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    //пути сохранения файлов
    build = 'build/' //для базы
    path = {
        root: build,
        templates: {
            src: './template/*.pug',
            dist: './'
        },
        styles: {
            src: ['./node_modules/normalize.css/normalize.css',
                    './node_modules/bootstrap-4-grid/css/grid.min.css',
                    './css/*.less'],
            concat: 'common-style.css',
            dist: `${build}css`
        },
        scripts: {
            src: ['./node_modules/jquery/dist/jquery.min.js', 
                    './scripts/*.js'],
            concat: 'common-script.js',
            dist: `${build}script`
        }
    };

//разметка
function template(){
    return gulp.src(path.templates.src) //взять все файлы pug
        .pipe(pug({pretty: true})) //переписать в html
        .pipe(gulp.dest(path.templates.dist)); //положить куда-то
}

//стили
function style(){
    return gulp.src(path.styles.src) //взять все файлы стилей
        .pipe(less()) //переписать в css
        .pipe(concat(path.styles.concat)) //объеденить в один файл
        .pipe(autoprefixer({overrideBrowserslist: 'last 2 version', cascade: false, grid: true})) //накинуть префиксы
        .pipe(gulp.dest(path.styles.dist)) //положить куда-то
        .pipe(browserSync.stream());
};

//javascript
function script(){
    return gulp.src(path.scripts.src) //взять все файлы js
        .pipe(concat(path.scripts.concat)) //объеденить в один файл
        .pipe(babel({presets: ['@babel/env']})) //прогнать бабелем
        .pipe(gulp.dest(path.scripts.dist)) //положить куда-то
        .pipe(browserSync.stream());
}

//минификация
function miniCss(){
    return style()
        .pipe(minCss({level: 2})) //минимизировать
        .pipe(gulp.dest(path.styles.dist)); //положить куда-то
}
function miniJs(){
    return script()
        .pipe(uglify()) //минификатор js
        .pipe(gulp.dest(path.scripts.dist)); //положить куда-то
}

//отслежка изменений
function watch(){
    browserSync.init({
        server: `./`
    });
    gulp.watch('./**/*.less', style); //отслеживаем изменения less
    gulp.watch('./scripts/*.js', script) //отслеживаем изменения в скриптах
    gulp.watch('./**/*.pug', template).on('change', browserSync.reload); //отслеживаем изменения html
}

//делаем билд
//для разработки
gulp.task('build', gulp.parallel(template, style, script));
gulp.task('dev', gulp.series('build', watch));

//для продакшена
gulp.task('default', gulp.parallel(template, miniCss, miniJs));