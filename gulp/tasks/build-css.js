var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

// compile *.scss files
gulp.task('build-css', function () {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init())  // process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // add the map to modified source
        .pipe(gulp.dest('dist'));
});
