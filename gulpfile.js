var gulp = require('gulp'),
    csslint = require('gulp-csslint');

gulp.task('css', function() {
    gulp.src('./css/style.css')
        .pipe(csslint('./.csslintrc'))
        .pipe(csslint.reporter());
});

gulp.task('default', function() {
    gulp.run('css');
});
