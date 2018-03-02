import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';
import uglify from "rollup-plugin-uglify";
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default [
  {
    input: 'src/app.js',
    output:{
      file: 'dist/__bundle.js',
      format: 'iife'
    },
    plugins: [
      babel({
        babelrc: false,
        presets: ["es2015-rollup"],
        plugins: [["transform-react-jsx", { pragma: "h" }]]
      }),
      resolve({
        jsnext: true
      }),
      commonjs(),
      uglify()
    ]
  },
  {
    input: 'src/jsonView.js',
    output:{
      file: 'dist/__jsonView.js',
      format: 'iife'
    },
    plugins: [
      resolve({
        jsnext: true
      }),
      commonjs(),
      globals(),
      builtins(),
      uglify()
    ]
  },
]
