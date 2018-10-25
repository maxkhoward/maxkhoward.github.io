var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

// gulp.task('log', function() {
//   gutil.log('== My Log Task ==')
// });
//
// gulp.task('copy', function() {
//   gulp.src('index.html')
//   .pipe(gulp.dest('assets'))
// });

gulp.task('sass', function() {
  gulp.src('src/scss/index.scss')
  .pipe(sass({style: 'minified'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('css/'))
});

gulp.task('copy', function() {
  gulp.src('build/**/*.html')
  .pipe(gulp.dest(''));
  gulp.src('build/static/js/*.js')
  .pipe(gulp.dest('static/js'));
});
