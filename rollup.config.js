/* eslint-disable no-undef */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const babelConfig = {
  babelHelpers: 'runtime',
  babelrc: false,
  ...{
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            ie: '11',
          },
        },
      ],
    ],
    plugins: [['@babel/plugin-transform-runtime']]
  },
};

const config = {
  input: ['src/index.ts'],
  output: {
    dir: './dist',
    format: 'iife' // or system
  },
  plugins: [
    typescript({ sourceMap: true }),
    copy({
      targets: [
        {
          src: 'package.json', dest: 'dist/', transform: (content) => {
            const packageJson = JSON.parse(content.toString());
            delete packageJson.devDependencies;
            delete packageJson.scripts;
            delete packageJson.files;

            return Buffer.from(JSON.stringify(packageJson, null, 2), 'utf-8');
          }
        },
      ]
    }),
    minifyHTML(), // reduzir html e css dentro de literals com javascript
    babel(babelConfig),
    resolve({ browser: true }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser() // minificar
  ]
};

export default config;