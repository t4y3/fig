#!/usr/bin/env node

// require the module as normal
let fs = require('fs');
let http = require('http');
let browserSync = require("browser-sync");
var chokidar = require('chokidar');

let config = {};
let headHtml = '';
loadConfigFile();

// Start the json server
let listener = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(config));
};
let server = http.createServer(listener).listen(8081);

// Start the server
browserSync({
  port: 8080,
  files: [
    process.cwd() + '/' + config.bundle,
    {
      match: [
        process.cwd() + '/**/fig.js',
        process.cwd() + '/.fig/head.html',
        process.cwd() + '/.fig/config.js'
      ],
      /** Custom event handler **/
      fn: function (event, file) {
        loadConfigFile();
        browserSync.reload();
      }
    }
  ],
  server: [
    __dirname + "/dist",
    process.cwd()
  ]
});

/**
 * Load Config files
 */
function loadConfigFile() {
  // require config
  config = require(process.cwd() + '/.fig/config.js');
  // Delete Cache
  delete require.cache[require.resolve(process.cwd() + '/.fig/config.js')];
  try {
    headHtml = fs.readFileSync(process.cwd() + '/.fig/head.html', 'utf8');
  } catch (err) {
    // Here you get the error when the file was not found,
    // but you also get any other error
  }
  config.headHtml = headHtml;
}
