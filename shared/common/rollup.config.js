import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-import-css';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const input = 'src/index.ts';

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      css(),
      terser(),
    ],
  },
];
