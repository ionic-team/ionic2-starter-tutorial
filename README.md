# Ionic 2 Starter: Developer Preview

This is a simple developer preview of an Ionic 2 starter project, the next generation of [Ionic](http://ionicframework.com/). Ionic is an open-source mobile app development SDK that makes it easy to build top quality mobile apps with web technologies.

Ionic 2 is based on the new [2.x version of AngularJS](https://angular.io/), and comes with many significant performance, usability, and feature improvements.


## Getting Started

1. `npm install`
2. `gulp watch`
3. Browse to [http://localhost:8100/](http://localhost:8100/)

__* Ionic 2 will be integrated within the [Ionic CLI](https://www.npmjs.com/package/ionic), [Ionic Lab](http://lab.ionic.io/), [Ionic Creator](http://creator.ionic.io/) (basically every Ionic tool), to make building an Ionic app even easier.__

## Things to keep in mind

Ionic 2 is alpha, and so is Angular 2. There are number of things being actively worked on that aren't quite ready yet. Here are some things to keep in mind as you try out Ionic 2 and Angular 2:

### Missing Ionic 1 features

We are currently working on completing a few core Ionic 1 features:

- Collection repeat (known as Virtual Scrolling in v2) is not quite ready
- Popup is half-baked


### Current Angular 2 known issues:

- Angular 2 is still in alpha and is not production ready
- Angular team has first focused on developing what the core of Angular 2 "is"
- Angular 2 filesize has not been optimized for minification yet
- Angular 2 bootstrap time has not been optimized yet
- As Angular 2 reaches beta there will be significant performance improvements


### ES6/Typescript

- Ionic's source is written using [Typescript](http://www.typescriptlang.org/)
- Ionic apps can be written in ES6 or TypeScript
- Typescript is an optional feature to be used at the developers discretion
- Ionic 2 starters come with the necessary build tools to transpile both ES6 and Typescript


### CSS Attribute Selectors:

- Simple
- Smaller markup
- Easier to read and understand
- [Not an issue](https://twitter.com/paul_irish/status/311610425617838081) for today's mobile browsers
- No performance impacts have been found


### Distribution

 - [npm: ionic-framework](https://www.npmjs.com/package/ionic-framework)


#### Webpack

- Starter project is already setup to build Ionic using [Webpack](http://webpack.github.io/)
