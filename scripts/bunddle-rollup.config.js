import resolve from '@rollup/plugin-node-resolve';

import path from 'path';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

import typescript2 from 'rollup-plugin-typescript2';

const rootPath = process.cwd();
const outputPathBase = `${rootPath}/dist/@animaliads/web-components`;

export default {
  input: `${rootPath}/packages/index.ts`,
  output: [
    {
      name: 'animalia-web-components',
      file: `${outputPathBase}/index.js`,
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    typescript2({
      tsconfig: path.join(rootPath, 'tsconfig.json'),
    }),
    minifyHTML(),
    terser(),
  ],
};
