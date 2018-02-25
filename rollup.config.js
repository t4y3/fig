import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';
import uglify from "rollup-plugin-uglify";

export default {
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
}
