#!/usr/bin/env node

// require the module as normal
const fs = require('fs-extra');
const browserSync = require('browser-sync');
const InFig = require('../infig/main');

// Constant
const PROCESS_CWD = process.cwd();
let config = {};
let headHtml = '';

/**
 * Delete cache
 */
const deleteCache = () => {
  delete require.cache[require.resolve(`${PROCESS_CWD}/.fig/head.html`)];
  delete require.cache[require.resolve(`${PROCESS_CWD}/.fig/config.js`)];
  for (let i = 0; i < config.figures.length; i += 1) {
    delete require.cache[require.resolve(`${PROCESS_CWD}/${config.figures[i]}.js`)];
  }
};

/**
 * Load Config files
 */
const loadConfigFile = () => {
  // reset figures list
  InFig.reset();
  // require config
  config = require(`${PROCESS_CWD}/.fig/config.js`); // eslint-disable-line global-require,import/no-dynamic-require
  for (let i = 0; i < config.figures.length; i += 1) {
    require(`${PROCESS_CWD}/${config.figures[i]}.js`); // eslint-disable-line global-require,import/no-dynamic-require
  }
  try {
    headHtml = fs.readFileSync(`${PROCESS_CWD}/.fig/head.html`, 'utf8');
  } catch (err) {
    // Here you get the error when the file was not found,
    // but you also get any other error
  }
  config.headHtml = headHtml;
  const c = Object.assign({}, config);
  c.figures = InFig.getFigures();
  fs.writeFile(`${__dirname}/../dist/fig.config.json`, JSON.stringify(c, null, '  '));
};

/**
 * Load config
 */
loadConfigFile();
deleteCache();

// Start the server
browserSync({
  port: 8080,
  files: [
    `${PROCESS_CWD}/${config.bundle}`,
    {
      match: [
        `${PROCESS_CWD}/**/fig.js`,
        `${PROCESS_CWD}/.fig/head.html`,
        `${PROCESS_CWD}/.fig/config.js`,
      ],
      /** Custom event handler * */
      fn: (/* event, file */) => {
        loadConfigFile();
        deleteCache();
        browserSync.reload();
      },
    },
  ],
  server: [`${__dirname}/../dist`, process.cwd()],
});
