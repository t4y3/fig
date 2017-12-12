#!/usr/bin/env node

var config = require(process.cwd() + '/fig.config.js');
var fs = require('fs');
var express = require('express');
var app = express();
var ejs = require('ejs');
var port = 8080;



app.engine('ejs', ejs.renderFile);
app.set('views', __dirname + '/dist');
// staticファイルの設定
app.use(express.static(process.cwd()));
app.use(express.static(__dirname + '/dist'));



var promises = [];
var codes = [];
var tagNames = [];
for (var i = 0, len = config.tags.length; i < len; i++) {
  promises.push(getCode(i, config.tags[i]));
  tagNames[i] = config.tags[i].match(/.*\/(.*)\.tag/)[1];
}

Promise.all(promises).then(function() {
  app.get('/', function(req, res){
    res.render('index.ejs', {
      includes: config.includes,
      tags: tagNames,
      codes: codes,
      colors: config.colors || []
    });

  });

  var server = app.listen(port, function(){
    console.log('[Fig] Access URLs:');
    console.log('-------------------------------------');
    console.log(' Local: http://localhost:' + port);
    console.log('-------------------------------------');
  });
});


/**
 * Get code
 */
function getCode(index, tag) {
  return new Promise(function(resolve, reject) {
    fs.readFile(tag, 'utf8', function (err, text) {
      codes[index] = text;
      resolve();
    });
  });
}
