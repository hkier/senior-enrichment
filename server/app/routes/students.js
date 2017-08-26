'use strict';

const express = require('express');
const router = new express.Router();
const student = require('../../db/models');
const Student = models.Student;
module.exports = router;

router.get('/student', function (req, res, next) {
    console.log('/student did I get here?')
    Student.findAll({ where: req.query })
        .then(student => res.json(student))
        .catch(next);
});

router.get('/student/:studentid', function (req, res) {
    console.log('at student id search');
    let id = req.params.studentid;
    Student.findOne({ where: { id: id } })
        .then(student => {
            if (student !== null) {
                res.status(200)
                res.json(student)
            }
        })
})
router.get('/student/campus/:campusid', function (req, res) {
    console.log('at student on campus id search');
    let campusid = req.params.campusid;
    Student.findAll({ where: { campusid: campusid } })
        .then(students => {
            if (students !== null) {
                res.status(200)
                res.json(students)
            }
        })
})

route.post('/student', function (req, res) {
    console.log ('at new student post')
    if (false) {   //TODO determine failure conditions.
        res.status(500)
        res.json('ERROR')
    } // end validation if
    else {
        Student.create(req.body)
            .then(data => {
                Student.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let student = new Student;
                    student.id = data2.id;
                    student.name = data2.name;
                    student.email = data2.email;
                    student.campusid = data2.campusid;
                    let message = "created"
                    res.status(200)
                    res.json({ message, student })
                })
            }) // end .then
    } // end else
})//end post

// Update a student

router.put('/student/:id', function(req,res){
    if (false){
    res.status(500);
    res.json ('error updating student')
    }// end validation block
    else {
        let id = req.params.id;
        Student.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            Student.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                Student.findOne({where:{id:id}}).then(data3 =>{
                    let student = new Student
                    let message = "updated!"
                    res.status(200);
                    res.json({message, student})
                })
            })
        }) //end find one
    } // end update else
    }) //end update student

//delete a student
router.delete('/student/:id', function(req,res,next){
    req.student.destroy()
    .then(()=> res.status(204.end()))
    .catch(next);
}) //end delete