/**********************
 * Gulpfile
 * Be sure to run `npm install` for `gulp` and its
 * following tasks to be available from the command line.
 **********************/

// node module imports
var gulp = require('gulp'),
    webpack = require('webpack'),
    minimist = require('minimist'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');



/******************************
 * gulp watch
 * Builds the app, and will rebuild the app when any
 * of its files change. Additionally, a local web server
 * will be started so you can view the built app.
 ******************************/
gulp.task('watch', ['serve', 'sass', 'fonts'], function(done) {
  watch('www/app/**/*.scss', function(){
    gulp.start('sass');
  });
  compile(true, done);
});


/******************************
 * gulp build
 * Builds the app from its source files.
 ******************************/
gulp.task('build', function(done) {
  compile(false, done);
});


/******************************
 * gulp serve
 * Starts a local web server so the app can be
 * viewed from http://localhost:8100/
 ******************************/
gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: flags.port,
    livereload: false
  });
});


/******************************
 * gulp sass
 * Used to convert Sass files into one bundled CSS file
 * which browsers can use. Additionally, this task uses
 * auto-prefixer, which will automatically add required
 * CSS prefixes when needed.
 ******************************/
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
});


/******************************
 * gulp fonts
 * Used to copy ionic font files to your build directory.
 ******************************/
gulp.task('fonts', function() {
  return gulp.src([
      'node_modules/ionic-framework/fonts/**/*.ttf',
      'node_modules/ionic-framework/fonts/**/*.woff'
    ])
    .pipe(gulp.dest('www/build/fonts'));
});


/******************************
 * gulp clean
 * Used to delete previous build files to ensure
 * the next build has the most recent files.
 ******************************/
gulp.task('clean', function(done) {
  var del = require('del');
  del(['www/build'], done);
});



/**********************
 * Compile
 **********************/

function compile(watch, cb) {
  // prevent gulp calling done callback more than once when watching
  var firstTime = true;

  // load webpack config
  var config = require('./webpack.config.js');

  // https://github.com/webpack/docs/wiki/node.js-api#statstojsonoptions
  var statsOptions = {
    'colors': true,
    'modules': true,
    'chunks': false,
    'exclude': ['node_modules']
  }

  // Can either run (one time compile) or watch
  // https://github.com/webpack/docs/wiki/node.js-api
  var compilerFunc = (watch ? 'watch' : 'run');
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
  }
}


// command line flag config
var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};
var flags = minimist(process.argv.slice(2), flagConfig);
