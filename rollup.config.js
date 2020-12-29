/* eslint-disable no-undef */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';

const config = {
  input: ['src/index.ts'],
  output: {
    dir: './dist',
    format: 'iife', // or system
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'package.json',
          dest: 'dist/',
          transform: content => {
            const packageJson = JSON.parse(content.toString());
            delete packageJson.devDependencies;
            delete packageJson.scripts;
            delete packageJson.files;

            return Buffer.from(JSON.stringify(packageJson, null, 2), 'utf-8');
          },
        },
      ],
    }),
    minifyHTML(), // reduzir html e css dentro de literals com javascript
    typescript({ sourceMap: true }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
    resolve(),
    // postcss({
    //   extract: true,
    //   minimize: true,
    // }),
    terser(), // minificar
  ],
};

export default config;
