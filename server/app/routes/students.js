'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const Student = models.Student;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/student did I get here?')
    Student.findAll({ where: req.query })
        .then(student => res.json(student))
        .catch(next);
});

router.get('/:studentid', function (req, res, next) {
    console.log('at student id search');
    let id = req.params.studentid;
    Student.findOne({ where: { id: id } })
        .then(student => {
            if (student !== null) {
                res.status(200).json(student)
            }
            else {
                res.status(404).json("Student not found for this id")
            }
        })
        .catch(next)
})
router.get('/campus/:campusid', function (req, res, next) {
    console.log('at student on campus id search');
    let campusId = req.params.campusid;
    Student.findAll({ where: { campusId: campusId } })
        .then(students => {
            if (students !== null) {
                res.status(200).json(students)
            }
        })
        .catch(next)
})

router.post('/', function (req, res, next) {
    console.log ('at new student post')
        Student.create(req.body)
            .then(data => {
                Student.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let student = new Student;
                    student.id = data2.id;
                    student.name = data2.name;
                    student.email = data2.email;
                    student.campusid = data2.campusid;
                    let message = "created"
                    res.status(200).json({ message, student })
                })
            }) // end .then
            .catch(next)
})//end post

// Update a student

router.put('/:id', function(req,res, next){
        let id = req.params.id;
        Student.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            Student.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                Student.findOne({where:{id:id}}).then(data3 =>{
                    let student = new Student
                    let message = "updated!"
                    res.status(200).json({message, student})
                })
            })
            .catch(next)
        }) //end find one
    }) //end update student

//delete a student
router.delete('/:id', function(req,res,next){
    let id = req.params.id;
    Student.destroy({where: {id: id} })
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete