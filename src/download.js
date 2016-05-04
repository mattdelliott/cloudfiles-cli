#!/usr/bin/env node
var cli = require('./cli.js'),
    fs = require('fs'),
    colors = require('colors'),
    path = require('path');

cli.cf.download(
  {
      container: cli.container,
      remote: cli.file,
      local: cli.output || './'+ path.parse(cli.file).base
  },
  function(err, result) {
      if(err) {
        if(err.statusCode == 404) {
          return console.log('File not found.'.inverse.red);
        }

        console.log('An error occurred downloading file.'.inverse.red);
        console.log(err);
        return;
      }

      console.log('File downloaded successfully.'.green);
  }
);
