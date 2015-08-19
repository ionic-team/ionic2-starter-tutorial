var webpack = require('webpack');

module.exports = {
  entry: {
    "app": "./www/app/app.js"
  },
  output: {
    path: __dirname,
    filename: "www/build/app.bundle.js",
    //pathinfo: true // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'awesome-typescript-loader?doTypeCheck=false&useBabel=true&useWebpackText=true',
        include: /app\//
      },
      { test: /\.ts$/, loader: 'awesome-typescript-loader', include: /app\// }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "node_modules/ionic-framework/src/es5/common" // ionic-framework npm package (stable)
      // "node_modules/ionic2/dist/src/es5/common" // driftyco/ionic2 github repo (master)
    ],
    extensions: ['', '.js', '.ts']
  }
};
