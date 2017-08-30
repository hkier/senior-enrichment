import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {
    
    const students = props.students;

    return (
<div>
    <h3>Students
    <button type="button" className="btn btn-default btn-group-sm">New Student</button>
    </h3>
    <div className="row">
    {
        students.map(student => (
        <div className="col-xs-3 tile" key={student.id}>
            <Link className="thumbnail" to={`/student/${student.id}`}>
                <img style="width:210px;height:140px" src={student.studentUrl} />
                <div className="caption">
                    <h5>
                        <span>{student.name}</span>
                    </h5>
                    Student Information
      <button type="button" className="btn btn-default btn-group-sm">Delete Student</button>
                </div>
    </Link>
  </div>
        ))
    }
</div>
    </div >
);
};
export default AllStudents