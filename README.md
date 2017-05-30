This is a starter template for [Ionic](https://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ npm install -g ionic cordova
$ ionic start myTutorial tutorial
```
:memo: *Note: For a global install of `-g ionic`, OSX/Linux users may need to prefix
the command with `sudo` or can setup [proper file permissions on OSX for
npm](https://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to
install without `sudo`.*

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

