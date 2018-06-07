var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var htmlReplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');
var del = require('del');

var config ={
    dist:'dist',
    src:'src/',
    cssin:'src/css/**/*.css',
    jsin:'src/js/**/*.js',
    imgin:'src/img/**/*.{jpg,jpeg,png,gif}',
    htmlin:'src/*.html',
    scssin:'src/scss/**/*.scss',
    ccsout:'dist/css',
    jsout:'dist/js',
    imgout:'dist/img',
    htmlout:'dist/',
    scssout:'src/css/',
    cssoutname:'style.css',
    jsoutname:'script.js',
    cssreplaceout:'css/style.css',
    jsreplaceout:'js/srcipt.js'
};


gulp.task('reload', function () {
    browserSync.reload();
});
gulp.task('serve', ['sass'], function () {


    browserSync({
        server: config.src

    });

    gulp.watch([config.htmlin,config.jsin], ['reload']);
    gulp.watch(config.scssin, ['sass']);
});

gulp.task('sass', function () {

    return gulp.src(config.scssin)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.scssout))
        .pipe(browserSync.stream());

});


gulp.task('css', function () {
    return gulp.src(config.cssin)
        .pipe(concat(config.cssoutname))
        .pipe(cleanCss())
        .pipe(gulp.dest(config.ccsout));
});

gulp.task('js', function () {
    return gulp.src(config.jsin)
        .pipe(concat(config.jsoutname))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsout));
});

gulp.task('img', function () {
    return gulp.src(config.imgin)
        .pipe(changed(config.imgout))
        .pipe(imagemin())
        .pipe(gulp.dest(config.imgout));
});

gulp.task('html', function () {
    return gulp.src(config.htmlin)
        .pipe(htmlReplace({
            'css': config.cssreplaceout,
            'js': config.jsreplaceout
        }))
        .pipe(htmlMin({
            sortAttributes: true,
            sortClassName: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('clean', function(){
    return del(['dist']);
});
gulp.task('default', ['serve']);