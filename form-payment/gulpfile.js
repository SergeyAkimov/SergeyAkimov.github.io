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

    //дополнительные плагины
    plugins = {
        //bootstrap v4+ сетка
        bootstrapGrid: {
            enable: 0,
            css: './node_modules/bootstrap-4-grid/css/grid.css'
        },
        //jQuery
        jQuery: {
            enable: 0,
            script: './node_modules/jquery/dist/jquery.js'
        },
        //slick slider (требует jQuery)
        slickSlider: {
            enable: 0,
            script: './node_modules/slick-carousel/slick/slick.js',
            css: './node_modules/slick-carousel/slick/slick.less'
        },
        //input mask
        inputMask: {
            enable: 0,
            script: './node_modules/inputmask/dist/jquery.inputmask.js', //версия для jQuery
            //script: './node_modules/inputmask/dist/inputmask.js' //версия без jQuery
        },
        //parsleyjs
        parsleyjs: {
            enable: 0,
            script: './node_modules/parsleyjs/dist/parsley.js',
            css: './node_modules/parsleyjs/src/parsley.css'
        },
        parsleyjsRu: {
            enable: 0,
            script: './node_modules/parsleyjs/dist/i18n/ru.js'
        },
        //vuejs
        vue: {
            enable: 1,
            script: './node_modules/vue/dist/vue.min.js'
        },
        vueMask: {
            enable: 1,
            script: './node_modules/v-mask/dist/v-mask.min.js'
        }
    }

    //пути сохранения файлов
    build = 'build/' //для базы
    buildLocation = build, //выбранный путь из вышеперечисленных
    path = {
        root: buildLocation,
        templates: {
            src: './src/index.pug',
            dest: `${buildLocation}`
        },
        styles: {
            src: getPluginsSrc(plugins, 'css', './src/css/*.less'),
            concat: 'common-style.css',
            dest: `${buildLocation}css`
        },
        scripts: {
            src: getPluginsSrc(plugins, 'script', './src/scripts/*js'),
            concat: 'common-script.js',
            dest: `${buildLocation}script`
        },
        images: {
            src: './src/img/**/*.*',
            dest: `${buildLocation}img`
        }
    };

//подключение плагинов
function getPluginsSrc(obj, type, defaultSrc) {
    let arr = [];
    for(key in obj) {
        if(obj[key].enable && obj[key][type]) {
            arr.push(obj[key][type]);
        }
    }
    arr.push(defaultSrc);
    return arr;
}
//разметка
function template(){
    return gulp.src(path.templates.src) //взять все файлы pug
        .pipe(pug({pretty: true})) //переписать в html
        .pipe(gulp.dest(path.templates.dest)); //положить куда-то
}
//стили
function style(){
    return gulp.src(path.styles.src) //взять все файлы стилей
        .pipe(less()) //переписать в css
        .pipe(concat(path.styles.concat)) //объеденить в один файл
        .pipe(autoprefixer({browsers: ['>0.01%'], cascade: false, grid: true})) //накинуть префиксы
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
//изображения
function image(){
    return gulp.src(path.images.src) //взять все изображения
        .pipe(gulp.dest(path.images.dest))
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
        server: `./build`
    });
    gulp.watch('./src/css/*.less', style); //отслеживаем изменения в стилях
    gulp.watch('./src/scripts/*.js', script) //отслеживаем изменения в скриптах
    gulp.watch('./src/*.pug', template).on('change', browserSync.reload); //отслеживаем изменения html
    gulp.watch('.src/img/**/*.*'); //отслеживаем изменения изображений
}

//делаем билд
//для разработки
gulp.task('build', gulp.parallel(template, style, script, image));
gulp.task('dev', gulp.series('build', watch));

//для продакшена
gulp.task('default', gulp.parallel(template, miniCss, miniJs, image));