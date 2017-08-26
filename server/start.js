'use strict';
var chalk = require('chalk');
var startDb = require('../db');
var server = require ('http').createServer();

var createApplication = function (){
    var app = require('./app');
    server.on('request',app);
};
var startServer = function() {
    server.listen(1337, function(){
        console.log(chalk.blue('Server started on port 1337'))
    });

}

// startDb
db.didSync
.then(createApplication)
.catch(function(err){
    console.error(chalk.red(err.stack));
});