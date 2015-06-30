System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "ionic/*": "ionic/*",
    "angular2/*": "angular2/*",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

