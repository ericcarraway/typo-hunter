var gulp = require('gulp');
var gutil = require('gulp-util');

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    var message = '\'watch\' started from gulp/tasks/watch.js';

    // scripts
    gulp.watch('source/scipts/**/*.js', ['jshint', 'build-js']);

    // styles
    gulp.watch([
        'source/scss/**/*.scss',
        'source/scss/**/*.css'
        ], ['build-css']);

    return gutil.log(message);
});
