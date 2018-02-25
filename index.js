#!/usr/bin/env node

// require the module as normal
let browserSync = require("browser-sync");

// Start the server
browserSync({
  port: 8080,
  server: [
    __dirname + "/dist",
    process.cwd()
  ]
});


const config = require(process.cwd() + '/.fig/config.js');
let http = require('http');

let listener = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  res.end(JSON.stringify(config));
};
http.createServer(listener).listen(8081);
