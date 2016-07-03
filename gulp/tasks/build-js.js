var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('build-js', function () {
    return gulp.src('source/javascript/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))

        // run this command to minify/uglify:
        // $ gulp --type production
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
});
