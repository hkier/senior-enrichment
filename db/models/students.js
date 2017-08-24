'use strict';

var db = require('./database');
var Sequelize = require('sequelize');

var Students = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },

    email: {
        type: Sequelize.TEXT,
        validate: { isEmail: true },
        allownull: false
    }
},
);

module.exports = {
    Page: Students,
    db: db
}