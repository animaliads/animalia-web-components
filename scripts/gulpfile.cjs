const { series, src, dest: dest } = require('gulp');

const tap = require('gulp-tap');
const path = require('path');

const packageJsonFileName = './../package.json';
const readmeFileName = './../README.md';

const buildDest = path.join(
  path.dirname(packageJsonFileName),
  'dist/@animaliads/web-components'
);

function copyPackageJson() {
  return src(packageJsonFileName)
    .pipe(
      tap(file => {
        const contents = JSON.parse(file.contents.toString());

        delete contents.devDependencies;
        delete contents.scripts;

        file.contents = Buffer.from(JSON.stringify(contents, null, 2), 'utf-8');
      })
    )
    .pipe(dest(buildDest));
}

function copyReadme() {
  return src(readmeFileName).pipe(dest(buildDest));
}

exports.default = series(copyPackageJson, copyReadme);
