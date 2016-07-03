var gulp = require('gulp');
var gutil = require('gulp-util');

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    var message = '\'watch\' started from gulp/tasks/watch.js';

    gulp.watch('source/javascript/**/*.js', ['jshint', 'build-js']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);

    return gutil.log(message);
});
