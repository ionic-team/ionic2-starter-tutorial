# Ionic 2 Starter

This is a simple Ionic 2 starter project.

To get started run `npm install` to install the project's dependencies.
```bash
$ npm install
```

Then `gulp watch` to transpile the app's es6 code down to es5, spin up a local development server and watch for  changes.

```bash
$ gulp watch
```

Then navigate to `http://localhost:8100` to check it out!


### Recommended Structure

```
- mydir (from ionic-cordova-base repo)

  - hooks

  - node_modules

  - src (from ionic starter repos)
    - assets
      - mylogo.png
    - users
      - user.js
      - user.html
      - user.scss
    - music
      - music.js
      - music.html
      - music.scss
    - index.html
    - app.scss
    - app.js

  - www (basically dist, all compiled/copied code)
    - lib
      - ionic (copied from node_modules, from npm ionic-lib)
        - css
          - ionic.css
          - ionic.min.css
        - js
           - ionic.js
           - ionic.min.js
           - web-animations.min.js
           - ionic.bundle.js (angular.dev.js and ionic.js, web-animations.min)
           - ionic.bundle.min.js (angular.min.js and ionic.min.js, web-animations.min)
        - fonts
          - ionicons.eot
          - ionicons.svg
          - ionicons.ttf
          - ionicons.woff

      - system
        - system.js
        - es6moduleloader.js

      - traceur
        - traceur-runtime.js

      - firebase (how would this get here?)
        - firebase.min.js

    - app.js (their transpiled js)
    - app.css (their compiled css)

  - config.xml (ready to go w/ good recommendations)
  - gulpfile.xml (minimal as possible, but everything that's useful)
  - package.json
      devDependencies: {
        ionic-lib,
        sass,
        typescript,
        concat,
        minify,
        firebase,
      }

```

- Is Webpack actually better that writing good gulp tasks???
- How would developers add in random es5 scripts (modules not in npm) that shouldn't be transpiled and added to system???
- How should they be adding scripts like firebase.js???
