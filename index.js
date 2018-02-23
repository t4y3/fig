#!/usr/bin/env node

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var path = require('path');

var compiler = webpack(config);

new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, "dist"),
  inline: true,
  stats: { colors: true },
  watchContentBase: true
}).listen(8080);
