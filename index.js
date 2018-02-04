#!/usr/bin/env node

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');
var express = require('express');

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, "dist"),
  watchContentBase: true,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true},
  setup: function(app) {
    app.get('/*', express.static(process.cwd()));
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
