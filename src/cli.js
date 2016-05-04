var args = require('minimist')(process.argv.slice(2)),
    username = args.u || args.user,
    apiKey = args.k || args.apiKey,
    region = args.r || args.region || 'ORD',
    file = args.f || args.file,
    container = args.c || args.container,
    output = args.o || args.output,
    colors = require('colors'),
    cloudfiles = require('pkgcloud').storage.createClient({
      provider: 'rackspace',
      username: username,
      apiKey: apiKey,
      region: region
    });

if(!username) {
    return console.log('-u username is required.');
}

if(!apiKey) {
    return console.log('-k apiKey is required.');
}

if(!region) {
    return console.log('-r region is required.');
}

if(!file) {
    return console.log('-f file is required.');
}

if(!container) {
    return console.log('-c container is required.');
}

module.exports = {
    cf: cloudfiles,
    file: file,
    output: output,
    container: container
};
