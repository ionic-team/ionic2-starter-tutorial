var gulp = require('gulp'),
    tsc = require('gulp-typescript');
    babel = require('gulp-babel'),
    webpack = require('webpack-stream'),
    del = require('del'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat'),
    minimist = require('minimist'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');


// Config
/******************************************************************************/
var tscOptions = {
  target: 'ES5',
  allowNonTsExtensions: true,
  module: "commonjs",
  isolatedModules: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  noEmitOnError: false,
  rootDir: '.'
}

// only report syntax errors, no type checking for now
var tscReporter = {
  error: function (error) {
    console.error(error.message);
  }
};

// Serve config
var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};
var flags = minimist(process.argv.slice(2), flagConfig);


// Tasks
/******************************************************************************/
gulp.task('watch', function(done) {
  runSequence(
    'clean',
    ['serve', 'build'],
    function(){
      gulp.watch('app/**/*.js', ['transpile']);
      gulp.watch('app/**/*.html', ['copy.html']);
      done();
    }
  );
});

gulp.task('clean', function(done) {
  del(['www/app'], done);
});

gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: flags.port,
    livereload: false
  });
});

gulp.task('build', ['bundle', 'copy.html']);

gulp.task('bundle', ['transpile'], function() {
  var config = require('./webpack.config.js');
  return gulp.src("www/app/app.js")
    .pipe(webpack(config))
    .pipe(gulp.dest('./'));
});

// transpile to es5 with typescript compiler for decorators
// you could have type checking by changing the reporter
// but we don't use it (yet)
gulp.task('transpile', function() {
  var stream = gulp.src(['app/**/*.js'])
    .pipe(cache('transpile', { optimizeMemory: true }))
    .pipe(tsc(tscOptions, null, tscReporter))
    .on('error', function (err) {
      stream.emit('end');
    })
    .pipe(gulp.dest('www/app'));

  return stream;
});

gulp.task('copy.html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('www/app'));
});
