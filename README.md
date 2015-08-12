# Ionic 2 Starter

This is a simple Ionic 2 starter project.

To get started run `npm install` to install the project's dependencies.
```bash
$ npm install
```

Then
```bash
$ gulp watch
```
 This will bundle your files using [Webpack](http://webpack.github.io/) and
 watch for any changes as you work.

Then navigate to `http://localhost:8100` to check it out!

#### Notes:
- To develop against the ionic2 master branch, you'll need to
```bash
$ npm install driftyco/ionic2
```
And then update your `webpack.config.js` file:
```js
resolve: {
  modulesDirectories: [
    "node_modules",
  //"node_modules/ionic-framework/src/es5/common"
    "node_modules/ionic2/dist/src/es5/common"
  ]
}
```

# This requires read access to the repo, which has not been officially opened yet.
