var gulp = require('gulp'),
    tsc = require('gulp-typescript');
    babel = require('gulp-babel'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat'),
    remember = require('gulp-remember'),
    minimist = require('minimist'),
    connect = require('gulp-connect');

var babelOptions = {
  modules: "system",
  moduleIds: true,
  getModuleId: function(name) {
    return "app/" + name;
  }
};

var tscOptions = {
  target: 'ES6',
  allowNonTsExtensions: true,
  isolatedModules: true,
  //declaration: true, //generate d.ts files
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  noEmitOnError: false,  // ignore errors
  rootDir: '.'
}

var tscReporter = {
    error: function (error) {
        console.error(error.message);
    }
};

var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};

var flags = minimist(process.argv.slice(2), flagConfig);

gulp.task('serve', ['build'], function() {
  connect.server({
    root: 'www',
    port: flags.port,
    livereload: false
  });
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('src/**/*.js', ['transpile']);
  gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('transpile', function() {
  var stream = gulp.src(['src/**/*.js', '!src/systemjs-config.js'])
    .pipe(cache('transpile', { optimizeMemory: true }))
    // transpile to es6 with typescript compiler for decorators
    // you could have type checking by changing the reporter
    // but we don't use it
    .pipe(tsc(tscOptions, null, tscReporter))
    .on('error', function (err) {
      stream.emit('end');
    })
    // lower es6 to es5 wrapped in System.register() using babel
    .pipe(babel(babelOptions))
    .on('error', function (err) {
      console.log("ERROR: " + err.message);
      this.emit('end');
    })
    // only want to transpile files that have changed, but need to concatenate
    // all transpiled files into our bundle
    .pipe(remember('es5-source-files'))
    // create the bundle 
    .pipe(concat('app.bundle.js'))
    .pipe(gulp.dest('www/'));

  return stream;
});

gulp.task('copy-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('www'));
});

gulp.task('copy-lib', function() {
  return gulp.src([
      'lib/**/*.js',
      'lib/**/*.css',
      'src/systemjs-config.js'
     ])
     .pipe(gulp.dest('www')); 
});

gulp.task('build', ['copy-lib', 'copy-html', 'transpile']);
