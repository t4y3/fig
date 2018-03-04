#!/usr/bin/env node

// require the module as normal
let fs = require('fs');
let http = require('http');
let browserSync = require("browser-sync");
let InFig = require('./infig/main');

// Constant
const PROCESS_CWD = process.cwd();
let config = {};
let headHtml = '';


/**
 * Delete cache
 */
const deleteCache = () => {
  delete require.cache[require.resolve(`${ PROCESS_CWD }/.fig/head.html`)];
  delete require.cache[require.resolve(`${ PROCESS_CWD }/.fig/config.js`)];
  for (let i = 0; i < config.figures.length; i++) {
    delete require.cache[require.resolve(`${ PROCESS_CWD }/${ config.figures[i] }.js`)];
  }
};


/**
 * Load Config files
 */
const loadConfigFile = () => {
  // reset figures list
  InFig.reset();
  // require config
  config = require(`${ PROCESS_CWD }/.fig/config.js`);
  for (let i = 0; i < config.figures.length; i++) {
    require(`${ PROCESS_CWD }/${ config.figures[i] }.js`);
  }
  try {
    headHtml = fs.readFileSync(`${ PROCESS_CWD }/.fig/head.html`, 'utf8');
  } catch (err) {
    // Here you get the error when the file was not found,
    // but you also get any other error
  }
  config.headHtml = headHtml;
};



/**
 * Load config
 */
loadConfigFile();
deleteCache();

/**
 * Setting Server
 */
// Start the json server
let listener = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  let c = Object.assign({}, config);
  c.figures = InFig.getFigures();
  res.end(JSON.stringify(c));
};
let server = http.createServer(listener).listen(8081);

// Start the server
browserSync({
  port: 8080,
  files: [
    `${ PROCESS_CWD }/${ config.bundle }`,
    {
      match: [
        `${ PROCESS_CWD }/**/fig.js`,
        `${ PROCESS_CWD }/.fig/head.html`,
        `${ PROCESS_CWD }/.fig/config.js`
      ],
      /** Custom event handler **/
      fn: (event, file) => {
        loadConfigFile();
        deleteCache();
        browserSync.reload();
      }
    }
  ],
  server: [
    __dirname + "/dist",
    process.cwd()
  ]
});
