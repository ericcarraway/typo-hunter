var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

gulp.task('mocha', function () {
    gulp.src([
        'test/*.js',
        'source/javascript/**/*.spec.js'
        ])
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});
