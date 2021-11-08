import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const input = 'src/index.ts';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [typescript({ typescript: require('typescript') })];

export default [
  {
    input,
    output: {
      name: 'common',
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins,
    external,
  },
];
