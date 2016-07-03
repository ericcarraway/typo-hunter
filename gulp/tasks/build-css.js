var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

// compile *.scss files
gulp.task('build-css', function () {
    return gulp.src([
        'source/scss/**/*.scss',
        'source/scss/**/*.css'
        ])
        .pipe(sourcemaps.init())    // process the original sources
        .pipe(concat('styles.css')) // concanate to one file: 'styles.css'
        .pipe(sass())               // convert sass to css
        .pipe(cssnano())            // minify css
        .pipe(sourcemaps.write())   // add the map to the modified source
        .pipe(gulp.dest('dist'));
});
