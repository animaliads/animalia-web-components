/* eslint-disable no-undef */
import { getPackages } from '@lerna/project';
import filterPackages from '@lerna/filter-packages';
import batchPackages from '@lerna/batch-packages';
import path from 'path';
import minimist from 'minimist';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const MAIN_VERSION = process.env.npm_package_version;

async function main() {
  const config = [];

  // Support --scope and --ignore globs if passed in via commandline
  const { scope, ignore } = minimist(process.argv.slice(2));

  const packages = await getSortedPackages(scope, ignore);

  packages.forEach(pkg => {
    config.push(configFactory(pkg));
  });

  return config;
}

function configFactory(pkg) {
  /* Absolute path to package directory */
  const basePath = path.relative(__dirname, pkg.location);

  /* Absolute path to input file */
  const input = path.join(basePath, 'src/index.ts');

  const { main } = pkg.toJSON();

  const outputPath = path.join('./dist/packages', main);
  const outputPathBase = outputPath.substr(0, outputPath.lastIndexOf('/'));

  const config = {
    input,
    output: {
      file: outputPath,
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      copy({
        targets: [
          {
            src: path.join(basePath, 'package.json'),
            dest: outputPathBase,
            transform: content => {
              const packageJson = JSON.parse(content.toString());
              delete packageJson.devDependencies;
              delete packageJson.scripts;
              delete packageJson.files;
              packageJson.version = MAIN_VERSION;

              return Buffer.from(JSON.stringify(packageJson, null, 2), 'utf-8');
            },
          },
          {
            src: path.join(basePath, 'README.md'),
            dest: outputPathBase,
          },
        ],
      }),
      minifyHTML(), // reduzir html e css dentro de literals com javascript
      typescript({
        tsconfig: path.join(basePath, 'tsconfig.json'),
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts'],
      }),
      resolve(),
      terser(), // minificar
    ],
  };
  return config;
}

/**
 * @param {string}[scope] - packages to only build (if you don't
 *    want to build everything)
 * @param {string}[ignore] - packages to not build
 *
 * @returns {string[]} - sorted list of Package objects that
 *    represent packages to be built.
 */
async function getSortedPackages(scope, ignore) {
  const packages = await getPackages(__dirname);
  const filtered = filterPackages(packages, scope, ignore, false);

  const packagesToBuild = batchPackages(filtered).reduce(
    (arr, batch) => arr.concat(batch),
    []
  );

  const test = packagesToBuild.reverse();

  return test;
}

export default main(); // @returns Promise<RollupConfig>
