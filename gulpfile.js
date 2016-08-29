/// <vs />
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');


var reload = browserSync.reload;

var src = {
    scss: 'assets/sass/**/*.scss',
    css: 'assets/css',
    php: '*.php',
    js: 'assets/js/**/*.js',
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync({
        // server: "./"
        startPath: "/",
        proxy: "localhost/khyst"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.php).on('change', reload);
    gulp.watch(src.js).on('change', function () {
        reload();
    });
});

// Compile sass into CSS
gulp.task('sass', function () {
    return gulp.src(src.scss)
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'compressed',
        }))
        .pipe(autoprefixer({
            browsers: ['last 50 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(src.css))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);
