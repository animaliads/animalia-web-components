import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const input = 'src/index.js';

export default [
  {
    input,
    output: {
      name: 'demo',
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [nodeResolve()]
  },
];
