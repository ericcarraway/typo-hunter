var gulp = require('gulp');
var jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
