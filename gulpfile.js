var gulp = require('gulp'),
    webpack = require('webpack'),
    del = require('del'),
    minimist = require('minimist'),
    connect = require('gulp-connect');

// Serve config
var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};
var flags = minimist(process.argv.slice(2), flagConfig);


// Tasks
/******************************************************************************/

gulp.task('clean', function(done) {
  del(['www/build'], done);
});

gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: flags.port,
    livereload: false
  });
});

gulp.task('build', function(done) {
  compile(false, done);
});

gulp.task('watch', ['serve'], function(done) {
  compile(true, done);
});

/******************************************************************************/

function compile(watch, cb) {
  // prevent gulp calling done callback more than once when watching
  var firstTime = true;

  // load webpack config
  var config = require('./webpack.config.js');

  // https://github.com/webpack/docs/wiki/node.js-api#statstojsonoptions
  var statsOptions = {
    "colors": true,
    "modules":true,
    "chunks":false,
    "exclude":["node_modules"]
  }

  // Can either run (one time compile) or watch
  // https://github.com/webpack/docs/wiki/node.js-api
  var compilerFunc = watch ? "watch" : "run";
  var compilerFuncArgs = [compileHandler];
  watch && compilerFuncArgs.unshift(null); // watch takes config obj as first arg

  // Do it
  var compiler = webpack(config);
  compiler[compilerFunc].apply(compiler, compilerFuncArgs);

  function compileHandler(err, stats){
    console.log(stats.toString(statsOptions));
    if (firstTime) {
      firstTime = false;
      cb();
    }
  };
}
