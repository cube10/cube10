'use strict';
let gulp = require('gulp');
let webpack = require('gulp-webpack');
let rename = require('gulp-rename');
let del = require('del');
let sass = require('gulp-sass');

let jsPaths   = ['*.js', 'models/*.js', 'routes/*.js', 'tests/**/*.js', 'dev/**/*.js'];
let htmlPaths = ['dev/**/*.html'];
let scssPaths = ['dev/style/*.scss'];
let mediaPaths = ['dev/img/*'];
let output = __dirname + '/public/';

gulp.task('del-public', () => {
  return del.sync([
    output + '*'
  ])
});

gulp.task('copy-html', () => {
  gulp.src(htmlPaths)
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(output));
});

gulp.task('copy-media', () => {
  gulp.src(mediaPaths)
    .pipe(rename({dirname: '/media'}))
    .pipe(gulp.dest(output));
});



gulp.task('webpack', () => {
  return gulp.src(__dirname + '/dev/entry.js')
  .pipe(webpack({
    //watch: true,
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(output));
});

gulp.task('sass', function() {
  return gulp.src(scssPaths)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output + 'css'));
});

// TODO: change watchers to delete pre-existing css/js/html from public
gulp.task('watch', () =>{
  gulp.watch(scssPaths, ['sass']);
  gulp.watch(jsPaths, ['webpack']);
  gulp.watch(htmlPaths, ['copy-html']);
  gulp.watch(mediaPaths, ['copy-media']);
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/tests/karma-testing.js')
  .pipe(webpack({output: {filename: 'test_bundle.js'},
  watch: true
}))
  .pipe(gulp.dest('./tests'));
});

gulp.task('default', ['del-public', 'webpack', 'copy-html', 'copy-media', 'sass', 'watch']);
