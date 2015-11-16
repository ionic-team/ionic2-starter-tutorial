This is a starter template for [Ionic 2](http://ionic.io/2).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic@alpha cordova
$ ionic start myTutorial tutorial --v2
```

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic run ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.
