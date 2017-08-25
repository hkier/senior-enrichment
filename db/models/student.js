'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },

    email: {
        type: Sequelize.TEXT,
        validate: { isEmail: true },
        allownull: false,
    }
})

module.exports = Student
