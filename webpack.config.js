// const fs = require('fs');
// const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// const figConfig = require(process.cwd() + '/.fig/config.js');
// const headHtml = fs.readFileSync(process.cwd() + '/.fig/head.html', 'utf8');


module.exports  = {
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
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {'modules': false}],
              'react'
            ]
          }
        }
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
    })
    // new webpack.DefinePlugin({
    //   FIG_CONFIG: JSON.stringify(figConfig),
    //   HEAD_HTML: JSON.stringify({ html: headHtml })
    // })
  ]
}
