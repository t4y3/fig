#!/usr/bin/env node

// require the module as normal
let fs = require('fs');
let http = require('http');
let browserSync = require("browser-sync");

// require config
const config = require(process.cwd() + '/.fig/config.js');
let headHtml = '';
try {
  headHtml = fs.readFileSync(process.cwd() + '/.fig/head.html', 'utf8');
} catch (err) {
  // Here you get the error when the file was not found,
  // but you also get any other error
}

config.headHtml = headHtml;

// Start the json server
let listener = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(config));
};
http.createServer(listener).listen(8081);


// Start the server
browserSync({
  port: 8080,
  server: [
    __dirname + "/dist",
    process.cwd()
  ]
});
