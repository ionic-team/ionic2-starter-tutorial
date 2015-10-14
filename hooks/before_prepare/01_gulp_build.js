#!/usr/bin/env node

var gulp = require('gulp');
require('../../gulpfile.js');

console.log("Running gulp build");
gulp.start('build');
