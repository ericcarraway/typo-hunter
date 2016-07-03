// https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

// grab our gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// define the default task and add the watch task to it
gulp.task('default', ['start', 'watch']);

// create a 'start' task and log a message
gulp.task('start', function () {
    return gutil.log('gulp has successfully started...');
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('source/javascript/**/*.js', ['jshint', 'build-js']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
});

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// compile sass
gulp.task('build-css', function () {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init())  // process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // add the map to modified source
        .pipe(gulp.dest('public/assets/stylesheets'));
});

// compile js
gulp.task('build-js', function () {
    return gulp.src('source/javascript/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))

        // only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
});
