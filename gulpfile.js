var gulp = require('gulp'),
    tsc = require('gulp-typescript');
    babel = require('gulp-babel'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat'),
    minimist = require('minimist'),
    connect = require('gulp-connect');

var babelOptions = {
  optional: ['es7.decorators'],
  modules: "system",
  moduleIds: true,
  getModuleId: function(name) {
    return "app/" + name;
  }
};

var tscOptions = {
  target: 'ES6',
  // Don't use the version of typescript that gulp-typescript depends on, we need 1.5
  // see https://github.com/ivogabe/gulp-typescript#typescript-version
  typescript: require('typescript'),
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

gulp.task('serve', ['bundle'], function() {
  connect.server({
    port: flags.port,
    livereload: false
  });
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('js/**/*.js', ['bundle']);
});

gulp.task('transpile', function() {
  var stream = gulp.src(['js/**/*.js', '!js/lib/**/*'])
             .pipe(cache('transpile', { optimizeMemory: true }))
             .pipe(tsc(tscOptions, null, tscReporter))
             .on('error', function (err) {
               stream.emit('end');
             })
             .pipe(babel(babelOptions))
             .on('error', function (err) {
               console.log("ERROR: " + err.message);
               this.emit('end');
             })
             .pipe(gulp.dest('dist/js/'));

  return stream;
});

gulp.task('bundle', ['transpile'], function() {
  return gulp.src(['dist/js/**/*.js', '!js/**/*'])
             .pipe(concat('app.bundle.js'))
             .pipe(gulp.dest('dist/'));
});
