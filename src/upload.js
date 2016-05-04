#!/usr/bin/env node
var cli = require('./cli.js'),
    fs = require('fs'),
    colors = require('colors'),
    path = require('path');

var parsed = path.parse(cli.file),
    readStream = fs.createReadStream(cli.file),
    writeStream = cli.cf.upload({
      container: cli.container,
      remote: cli.output || parsed.base
    });

writeStream.on(
    'success',
    function(s) {
        console.log('File uploaded successfully.'.green);
    }
);

writeStream.on(
    'error',
    function(e) {
        console.log('An error occurred uploading file.'.inverse.red);
        console.log(e);
    }
);

readStream.pipe(writeStream);
