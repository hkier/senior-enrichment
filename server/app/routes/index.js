'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/campus', require('./campus'));
router.use('/students', require('./students'));
console.log('we are in routes/index.js')
router.use(function(req,res){
    res.status(404).end()
})