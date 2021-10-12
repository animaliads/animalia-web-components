import resolve from '@rollup/plugin-node-resolve';

import path from 'path';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

import typescript from '@rollup/plugin-typescript';
import typescript2 from 'rollup-plugin-typescript2';

import copy from 'rollup-plugin-copy';

const MAIN_VERSION = process.env.npm_package_version;

const PACKAGE_ROOT_PATH = process.cwd();
const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;

const name = LERNA_PACKAGE_NAME.split('/')[1].split('-')[1];

const outputPathBase = `${LERNA_ROOT_PATH}/dist/${LERNA_PACKAGE_NAME}`;

export default [
  {
    input: `${PACKAGE_ROOT_PATH}/src/index.ts`,
    output: [
      {
        name,
        file: `${outputPathBase}/index.js`,
        format: 'umd',
        sourcemap: true
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: path.join(PACKAGE_ROOT_PATH, 'package.json'),
            dest: outputPathBase,
            transform: content => {
              const packageJson = JSON.parse(content.toString());
              delete packageJson.devDependencies;
              delete packageJson.scripts;
              delete packageJson.files;
              packageJson.version = MAIN_VERSION;
              packageJson.main = 'index.js';

              return Buffer.from(JSON.stringify(packageJson, null, 2), 'utf-8');
            },
          },
          {
            src: path.join(PACKAGE_ROOT_PATH, 'README.md'),
            dest: outputPathBase,
          },
        ],
      }),
      minifyHTML(),
      typescript({
        sourceMap: true,
        declaration: true,
        tsconfig: path.join(PACKAGE_ROOT_PATH, 'tsconfig.json'),
      }),
      resolve(),
      terser(),
    ],
  },
  {
    input: `${LERNA_ROOT_PATH}/packages/index.ts`,
    output: [
      {
        name,
        file: `${LERNA_ROOT_PATH}/dist/@animaliads/web-components/index.js`,
        format: 'umd',
      },
    ],
    plugins: [
      resolve(),
      typescript2({
        tsconfig: path.join(`${LERNA_ROOT_PATH}`, 'tsconfig.json'),
      }),
      minifyHTML(),
      terser(),
    ],
  },
];
