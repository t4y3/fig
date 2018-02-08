const fs = require('fs');
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('css/iframe.css');

const figConfig = require(process.cwd() + '/.fig/config.js');
const headHtml = fs.readFileSync(process.cwd() + '/.fig/head.html', 'utf8');


const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
         test: /\.tag$/,
         enforce: 'pre',
         exclude: /node_modules/,
         use: [
            {
               loader: 'riot-tag-loader',
               query  : {
                  hot: true,
                  template: 'pug',   // テンプレートを指定（任意）
                  debug: true
               }
            }
         ]
      },
      {
        test: /\.js|\.tag$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'buble-loader'
        ]
      },
      {
        test: /style\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /iframe\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
        })
      },
      {
        test: /\.(ejs)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      FIG_CONFIG: JSON.stringify(figConfig),
      HEAD_HTML: JSON.stringify({ html: headHtml })
    })
  ]
}

module.exports = config
