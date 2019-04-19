#!/usr/bin/env node

// require the module as normal
let fs = require('fs-extra');
let InFig = require('../infig/main');

// Constant
const PROCESS_CWD = process.cwd();
let config = {};
let headHtml = '';

// Dist dir
const DIST_DIR = process.argv[2] ? `${ PROCESS_CWD }/${ process.argv[2] }` : PROCESS_CWD;


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
  let c = Object.assign({}, config);
  c.figures = InFig.getFigures();
  if (config.bundle) {
    fs.copyFileSync(config.bundle, `${ DIST_DIR }/bundle.js`);
    c.bundle = 'bundle.js';
  }
  fs.copySync(`${ __dirname }/../dist`, DIST_DIR);
  fs.writeFile(`${ DIST_DIR }/fig.config.json`, JSON.stringify(c, null, '  '));
};



/**
 * Load config
 */
loadConfigFile();
