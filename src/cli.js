var args = require('minimist')(process.argv.slice(2)),
    username = args.u || args.user,
    apiKey = args.k || args.apiKey,
    region = args.r || args.region || 'ORD',
    file = args.f || args.file,
    container = args.c || args.container,
    output = args.o || args.output,
    colors = require('colors'),
    error = null,
    cloudfiles = require('pkgcloud').storage.createClient({
      provider: 'rackspace',
      username: username,
      apiKey: apiKey,
      region: region
    });

if(!username) {
    error = '-u username is required.';
} else if(!apiKey) {
    error = '-k apiKey is required.';
} else if(!region) {
    error = '-r region is required.';
} else if(!file) {
    error = '-f file is required.';
} else if(!container) {
    error = '-c container is required.';
}

if(error) {
    console.log(error.inverse.red);
    return process.exit(-1);
}

module.exports = {
    cf: cloudfiles,
    file: file,
    output: output,
    container: container
};
