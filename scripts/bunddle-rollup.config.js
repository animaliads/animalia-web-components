import resolve from '@rollup/plugin-node-resolve';

import path from 'path';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
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
    copy({
      targets: [
        {
          src: path.join(rootPath, 'package.json'),
          dest: outputPathBase,
          transform: content => {
            const packageJson = JSON.parse(content.toString());
            delete packageJson.devDependencies;
            delete packageJson.scripts;
            delete packageJson.files;

            return Buffer.from(JSON.stringify(packageJson, null, 2), 'utf-8');
          },
        },
        {
          src: path.join(rootPath, 'README.md'),
          dest: outputPathBase,
        },
      ],
    }),
    resolve(),
    typescript2({
      tsconfig: path.join(rootPath, 'tsconfig.json'),
    }),
    minifyHTML(),
    terser(),
  ],
};
