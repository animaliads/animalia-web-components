import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

/**
 * Função genérica para geração dos pacotes de distribuição dos pacotes.
 * Esta função é baseada na configuração padrão do Rollup para geração de bundle.
 *
 * @param {string} input caminho do arquivo index.ts
 * @param {*} pkg conteúdo do package.json
 * @returns Rollup config
 */
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
