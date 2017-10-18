'use strict';
var path = require ('path');
var express = require ('express');
var app = express();
module.exports = app;

require('./configure')(app);

app.use('/api', require('/routes'));
console.log ('we are in app/index.js')

app.get('/*', function (req, res) {
    res.sendFile(app.get('../../public/index.html'));
});

// custom error handling  copied from sequelize express checkpoint
app.use(function (err, req, res, next) {
    // just in case
    if (!err.stack || !err.message) next(err);
    // clean up the trace to just relevant info
    var cleanTrace = err.stack
    .split('\n')
    .filter(line => {
      // comment out the next two lines for full (verbose) stack traces
      var projectFile = line.indexOf(__dirname) > -1; // omit built-in Node code
      var nodeModule = line.indexOf('node_modules') > -1; // omit npm modules
      return projectFile && !nodeModule;
    })
    .join('\n');
    // colorize and format the output
    console.log(chalk.magenta('      ' + err.message));
    console.log('    ' + chalk.gray(cleanTrace));
    // send back error status
    res.status(err.status || 500).end();
  });