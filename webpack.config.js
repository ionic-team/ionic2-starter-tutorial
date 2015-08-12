var webpack = require('webpack');

module.exports = {
  entry: {
    'app': "./www/app/app.js"
    // 'angular2': [ // <--- if you want angular as a separate bundle
    //   // Angular 2 Deps
    //   'traceur-runtime',
    //   'zone.js',
    //   'reflect-metadata',
    //   'rtts_assert/rtts_assert',
    //   'angular2/angular2'
    // ]
  },
  output: {
    path: __dirname,
    filename: "www/app/app.bundle.js",
    pathinfo: true // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /(\.woff|\.ttf|\.svg)/, loader: "url?limit=1000000" }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "node_modules/ionic-framework/src/es5/common" // ionic-framework npm package (stable)
      // "node_modules/ionic2/dist/src/es5/common" // driftyco/ionic2 github repo (master)
    ],
    extensions: ['', '.js']
  },
  // plugins: [ // <--- if you want angular as a separate bundle
  //   new webpack.optimize.CommonsChunkPlugin("angular2", "www/app/angular.js")
  // ],
  watch: true // watch for changes after building
};
