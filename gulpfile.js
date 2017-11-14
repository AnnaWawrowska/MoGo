'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync'),
del = require('del'),
useref = require('gulp-useref'),
imagemin = require('gulp-imagemin'),
runSequence = require('run-sequence');

gulp.task('sass', function () {
  return gulp.src('src/css/style.scss')
  .pipe(plumber())
    .pipe(sass.sync({ outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 version', 'IE 9']
    }))
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
  browserSync.init({
    server: 'src/'
  });
});

gulp.task('watch', function(){
  gulp.watch('src/css/**/*.scss', ['sass']);
  gulp.watch(['src/*.html', 'src/**/*.js'], browserSync.reload);
});

gulp.task('clean', function(){
  return del('public_html/')
});

gulp.task('html', function() {
gulp.src('src/*.html')
.pipe(gulp.dest('public_html/'))
});

gulp.task('images', function(){
  return gulp.src('public_html/img/*', {
    base: 'public_html'
  })
  .pipe(imagemin())
  .pipe(gulp.dest('public_html/'));
})

gulp.task('copy', function() {
  return gulp.src(['src/css/**/*.css', 'src/css/vendor/*', 'src/img/*', 'src/js/**/*', 'src/fonts/*'], {
    base: 'src'
  })
  .pipe(gulp.dest('public_html/'))
})

gulp.task('build', function(cb) {
  runSequence('clean', 'html', 'copy', 'images', cb)
});

gulp.task('bulid:server', ['bulid'], function() {
  browserSync.init({
    server: 'public_html/'
  })
});

gulp.task('default', ['sass', 'server', 'watch']);
