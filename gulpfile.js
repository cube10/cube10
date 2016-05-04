'use strict';

let gulp = require('gulp');
let webpack = require('gulp-webpack');
let rename = require('gulp-rename');
let del = require('del');
let sass = require('gulp-sass');

// let lint = require('gulp-eslint');


let paths = ['*.js', 'models/*.js', 'routes/*.js', 'tests/*.js', 'dev/**/*.html', 'dev/**/*.js'];
let jsPaths   = ['*.js', 'models/*.js', 'routes/*.js', 'tests/**/*.js', 'dev/**/*.js'];
let htmlPaths = ['dev/**/*.html'];

gulp.task('del-build', () => {
  return del([
    __dirname + '/dev/build/**', __dirname + '!/dev/build'
  ])
  .then(paths => console.log('Deleted files and folders:\n', paths.join('\n')));
});

// Possible routing for index files === 'dev/components/**/*.html'
gulp.task('copy-html', () => {
  gulp.src(htmlPaths)
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest(__dirname + '/public'));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/dev/entry.js')
  .pipe(webpack({
    watch: true,
    // module: {
    //   loaders: [
    //     { test: /\.css$/, loader: 'style!css'}
    //   ]
    // },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/dev/build/'));
});

gulp.task('sass', function() {
  return gulp.src(__dirname + '/dev/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/dev/build/css'));
});

// gulp.task('sass:watch', function() {
//   gulp.watch(__dirname + '/dev/style/*.scss', ['sass']);
// });

gulp.task('watch', () =>{
  gulp.watch(paths);
});

// gulp.task('bundle:test', () => {
//   return gulp.src(__dirname + '/tests/karma-testing.js')
//   .pipe(webpack({output: {filename: 'test_bundle.js'},
//   watch: true
// }))
//   .pipe(gulp.dest('./test'));
// });

// gulp.task('eslint', () => {
//   gulp.src(paths)
//   .pipe(lint())
//   .pipe(lint.format());
// });

// The gulp 'default' with all tasks, excluding some during development process
// gulp.task('default', ['eslint', 'del-build', 'webpack', 'bundle:test', 'copy-html', 'sass']);
gulp.task('default', ['del-build', 'webpack', 'copy-html', 'sass']);
