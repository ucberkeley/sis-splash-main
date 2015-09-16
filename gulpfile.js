// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inlinesource = require('gulp-inline-source');
var autoprefixer = require('gulp-autoprefixer');

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('src/css'));
});

gulp.task('inlinesource', ['sass'], function() {
  return gulp.src('./src/index.html')
  .pipe(inlinesource())
  .pipe(gulp.dest('./out'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['inlinesource']);
});

// Exit for Travis
gulp.task('exit', ['sass', 'inlinesource'], function() {
  process.exit(0);
});

// Default Task
gulp.task('default', ['sass', 'watch', 'inlinesource']);

// Test Task
gulp.task('test', ['sass', 'inlinesource', 'exit']);
