'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

var files = {
    src: [
        './src/**/*.js',
        '!./src/**/__tests__/**'
    ]
};

gulp.task('watch', ['release'], function() {
    gulp.watch(files.src, ['release']);
});

gulp.task('release', function() {
    return gulp.src(files.src)
        .pipe(babel())
        .pipe(gulp.dest('./release'));
});

gulp.task('default', ['release']);
