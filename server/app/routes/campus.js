'use strict';

const express = require('express');
const router = new express.Router();
const campus = require('../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/campus', function (req, res, next){
console.log('did I get here?')
    Campus.findAll({where:req.query})
.then(campus => res.json(campus))
.catch(next);
});