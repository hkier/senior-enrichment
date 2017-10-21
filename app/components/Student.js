import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//this component will display the student info/nav tile.  It is called in two places
//the first is for AllStudents.  The other is from a SingleCampus.  

export default (props) => {
let student = props.student;
return (
    <div className="col-xs-3 tile" key={student.id}>
    <Link className="thumbnail" to={`/students/${student.id}`}>
        <div className="caption">
            <h5>
                <span>{student.name}</span>
            </h5>
            Student Information
{false && <button type="button" className="btn btn-default btn-group-sm">Delete Student</button>}
        </div>
    </Link>
</div>
)

}