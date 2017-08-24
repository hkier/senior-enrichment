'use strict';

var db = require('./database');
var Sequelize = require('sequelize');

var Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    imageurl: {
        type: Sequelize.STRING,
        validate: { isUrl: true },
        allownull: true,

    }
})