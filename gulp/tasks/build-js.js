var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('build-js', function () {
    return gulp.src([
        'wordlists/js/*.js',
        'source/scripts/**/*.js',
        '!source/scripts/**/*.spec.js' // exclude tests
        ])
        .pipe(concat('bundle.js'))

        // run this command to minify/uglify:
        // $ gulp --type production
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('dist'));
});
