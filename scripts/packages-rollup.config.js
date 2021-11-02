import resolve from '@rollup/plugin-node-resolve';

import path from 'path';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

import typescript2 from 'rollup-plugin-typescript2';

const PACKAGE_ROOT_PATH = process.cwd();
const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;

const name = LERNA_PACKAGE_NAME.split('/')[1].split('-')[1];
const outputPathBase = path.join(LERNA_ROOT_PATH, 'dist', LERNA_PACKAGE_NAME);

export default {
  input: `${PACKAGE_ROOT_PATH}/src/index.ts`,
  output: [
    {
      name,
      file: `${outputPathBase}/index.js`,
      format: 'umd',
      sourcemap: true,
    },
  ],
  plugins: [
    minifyHTML(),
    typescript2({
      sourceMap: true,
      declaration: true,
      tsconfig: path.join(PACKAGE_ROOT_PATH, 'tsconfig.json'),
    }),
    resolve(),
    terser(),
  ],
};
