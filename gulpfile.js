var gulp = require('gulp'),
    webpack = require('webpack'),
    del = require('del'),
    minimist = require('minimist'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

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

gulp.task('watch', ['serve', 'sass', 'fonts'], function(done) {
  gulp.watch('www/app/**/*.scss', ['sass']);
  compile(true, done);
});

gulp.task('sass', function(){
  var autoprefixerOpts = {
    browsers: [
      'last 2 versions',
      'iOS >= 7',
      'Android >= 4',
      'Explorer >= 10',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  };

  return gulp.src('www/app/app.scss')
    .pipe(sass({
      includePaths: ['node_modules/ionic-framework/src/scss'],
    }))
    .on('error', function(err){
      console.error(err.message);
      this.emit('end');
    })
    .pipe(autoprefixer(autoprefixerOpts))
    .pipe(gulp.dest('www/build/css'));
})

gulp.task('fonts', function() {
  return gulp.src([
      'node_modules/ionic-framework/fonts/**/*.ttf',
      'node_modules/ionic-framework/fonts/**/*.woff'
    ])
    .pipe(gulp.dest('www/build/fonts'));
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
