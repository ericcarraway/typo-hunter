var gulp = require('gulp');
var gutil = require('gulp-util');

// create a 'start' task and log a message
gulp.task('start', function () {
    var message = 'gulp started from gulp/tasks/start.js';
    return gutil.log(message);
});
