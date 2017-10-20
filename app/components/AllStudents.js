import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Student from './Student'




function AllStudents(props) {
    let { student } = props

    return (
        <div>
            <h3>Students
            <NavLink to='/students/new'>
    <button type="button" className="btn btn-default btn-group-sm">New Student</button>
    </NavLink>        
    </h3>
            <div className="row">
                {
                    student.students.map(student1 => (
                        <Student student={student1} />
                    ))
                }
            </div>
        </div >
    );
};

const mapStateToProps = function (state) { return { student: state.student } }
export default withRouter(connect(mapStateToProps)(AllStudents));