import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export function getRollupConfig(input, pkg) {
  const plugins = [typescript({ typescript: require('typescript') }), terser()];

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  return {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins,
    external,
  };
}
