const { series, src, dest: dest } = require('gulp');

const tap = require('gulp-tap');
const path = require('path');
const rootPath = path.dirname(process.cwd());

const srcFile = path.join(rootPath, 'package.json');
const srcFileReadme = path.join(rootPath, 'README.md');
const destFile = path.join(rootPath, 'dist', '@animaliads', 'web-components');

const MAIN_VERSION = process.env.npm_package_version;

function copyPackageJson() {
  return src(srcFile)
    .pipe(
      tap(file => {
        const packageJson = JSON.parse(file.contents.toString());
        delete packageJson.devDependencies;
        delete packageJson.scripts;
        delete packageJson.files;
        packageJson.version = MAIN_VERSION;
        packageJson.main = 'index.js';

        file.contents = Buffer.from(
          JSON.stringify(packageJson, null, 2),
          'utf-8'
        );
      })
    )
    .pipe(dest(destFile));
}

function copyReadme() {
  return src(srcFileReadme).pipe(dest(destFile));
}

exports.default = series(copyPackageJson, copyReadme);
