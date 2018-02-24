const fs = require('fs');
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const figConfig = require(process.cwd() + '/.fig/config.js');
const headHtml = fs.readFileSync(process.cwd() + '/.fig/head.html', 'utf8');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'babel-loader'
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
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/iframe.css'
    }),
    new webpack.DefinePlugin({
      FIG_CONFIG: JSON.stringify(figConfig),
      HEAD_HTML: JSON.stringify({ html: headHtml })
    }),
    new CopyWebpackPlugin([
      { from: process.cwd() + '/' + figConfig.bundle, to: './_bundle.js' }
    ], {})
  ]
}

module.exports = config
