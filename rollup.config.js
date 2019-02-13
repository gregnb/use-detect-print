import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
//import uglify from 'rollup-plugin-uglify-es';
import { uglify } from 'rollup-plugin-uglify';
//import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import pkg from './package.json'

const external = Object.keys(pkg.peerDependencies || {});
const allExternal = [...external, Object.keys(pkg.dependencies || {})];

export default {
  input: 'src/index.js',
  external: allExternal,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify()
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    }
  ]
};