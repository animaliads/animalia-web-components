const browserify = require('browserify');
var fs = require("fs");
const babelify = require('babelify');

var b = browserify();
b.add('./scripts/index.js');
b.transform(babelify.configure({
    presets: ["@babel/preset-env"]
  }), {global: true});
b.bundle().pipe(fs.createWriteStream("./scripts/bundle.js"));