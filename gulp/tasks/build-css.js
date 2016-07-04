var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

// compile *.scss files
gulp.task('build-css', function () {
    return gulp.src([
        // since our custom styles may override some vendor styles,
        // load vendor styles first
        'source/scss/vendor/*.css',
        'source/scss/vendor/*.scss',

        // load our custom styles
        'source/scss/**/*.css',
        'source/scss/**/*.scss'
        ])
        .pipe(concat('bundle.css')) // concanate to one file: 'bundle.css'
        .pipe(sass())               // convert sass to css
        .pipe(cssnano())            // minify css
        .pipe(gulp.dest('dist'));
});
