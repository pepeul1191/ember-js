var gulp = require('gulp');
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var concatCss = require('gulp-concat-css');
var minifyCss = require("gulp-minify-css");
var sass = require('gulp-sass');
var DESTINO = 'dist/';
var MEDIA = '';
var BASE_URL = 'http://localhost:82/react/';
var NODE_MODULES = 'node_modules';

// INICIO LIBRERÍAS JS ----------------------------------------------------------

gulp.task('libs-js', function(){
  gulp.src([
    MEDIA + 'bower_components/jquery/dist/jquery.min.js',
    MEDIA + 'bower_components/tether/dist/js/tether.min.js',
    MEDIA + 'bower_components/bootstrap/dist/js/bootstrap.min.js',
    MEDIA + 'bower_components/ember/ember.min.js',
    MEDIA + 'bower_components/ember/ember-template-compiler.js',
  ])
  .pipe(concat('libs.js'))
  .pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('fonts', function() {
  gulp.src([
    MEDIA + 'bower_components/font-awesome/fonts/*',
    MEDIA + 'bower_components/bootstrap/fonts/*',
  ])
  .pipe(gulp.dest(DESTINO));
});

gulp.task('libs-css', function() {
  gulp.src([
    MEDIA + 'bower_components/tether/dist/css/tether.min.css',
    MEDIA + 'bower_components/bootstrap/dist/css/bootstrap.min.css',
    MEDIA + 'bower_components/font-awesome/css/font-awesome.min.css',
  ])
  .pipe(concatCss('libs.min.css'))
  .pipe(minifyCss())
  .pipe(replace('../../../font-awesome/fonts/', BASE_URL + 'dist/'))
  .pipe(replace('../fonts/glyphicons', 'glyphicons'))
  .pipe(gulp.dest(DESTINO));
});

// TODO ----------------------------------------------------------

gulp.task('todo', ['fonts', 'libs-css', 'libs-js']);