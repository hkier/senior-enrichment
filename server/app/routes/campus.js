'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/campus did I get here?')
    Campus.findAll({ where: req.query })
        .then(campus => res.json(campus))
        .catch(next);
});

router.get('/:campusid', function (req, res, next) {
    console.log('at campus id search');
    let id = req.params.campusid;
    Campus.findOne({ where: { id: id } })
        .then(campus => {
            if (campus !== null) {
                res.status(200)
                res.json(campus)
            } 
            else {
                res.status(404)
                res.json("not found")
            }
        })
        .catch(next)
})
router.post('/', function (req, res, next) {
    console.log ('At new campus post')
    if (false) {   //TODO determine failure conditions.
        res.status(500)
        res.json('ERROR')
    } // end validation if
    else {
        Campus.create(req.body)
            .then(data => {
                Campus.findOne({ where: { name: req.body.name } }).then(data2 => {
                    let campus = new Campus;
                    campus.id = data2.id;
                    campus.name = data2.name;
                    let message = "created"
                    res.status(200)
                    res.json({ message, campus })
                })
            }) // end .then
    } // end else
})//end post

// Update a campus

router.put('/:id', function(req,res, next){

    let id = req.params.id;
    Campus.findOne({where: {id: id} }).then(data =>{
        data.datavalues.name = req.body.name
        Campus.update(data.dataValues, {where: {id:id}})
        .then(data2 => {
            Campus.findOne({where:{id:id}}).then(data3 =>{
                let campus = new Campus
                let message = "updated!"
                res.status(200);
                res.json({message, campus})
            })
        })
        .catch(next)
    }) //end find one
}) //end update campus

//delete a campus
router.delete('/:id', function(req,res,next){
/*
Can a campus be deleted when there are still students?  
I don't think that should be the case.  So we will have to 
check to see if there are any students BEFORE we delete the campus OR
delete all the students.
*/ 
    req.campus.destroy()
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete