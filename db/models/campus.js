'use strict';

var db = require('../index');
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
module.exports = Campus