import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/jsonView.js',
  output: {
    file: 'dist/__jsonView.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      jsnext: true,
    }),
    commonjs(),
    globals(),
    builtins(),
    uglify(),
  ],
};
