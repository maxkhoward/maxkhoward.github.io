var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var fs = require('file-system');
var request = require('request');

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

gulp.task('pullPosts', function () {
  return
    request('http://18.219.3.219/wp-json/wp/v2/posts?per_page=100').pipe(fs.createWriteStream('static/posts.json'));
});

gulp.task('pullCategories', function () {
  return
    request('http://18.219.3.219/wp-json/wp/v2/posts?per_page=100').pipe(fs.createWriteStream('static/posts.json'));
});

gulp.task('deploy', function(){
  gulp.start('pullPosts');
  gulp.start('pullCategories');
  gulp.start('copy');
  gulp.start('sass');
});
