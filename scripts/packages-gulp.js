const { series, src, dest: dest } = require('gulp');

const tap = require('gulp-tap');
const path = require('path');

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const name =
  LERNA_PACKAGE_NAME.split('/')[1].split('-')[1] ||
  LERNA_PACKAGE_NAME.split('/')[1];

const srcFile = path.join(LERNA_ROOT_PATH, 'packages', name, 'package.json');
const srcFileReadme = path.join(LERNA_ROOT_PATH, 'packages', name, 'README.md');
const destFile = path.join(LERNA_ROOT_PATH, 'dist', LERNA_PACKAGE_NAME);

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
