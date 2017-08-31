import React from 'react';
import { Link } from 'react-router-dom';

const OneStudent = (props) => {

    const oneStudent = props.oneStudent;

    return (

        <div className="col-xs-3 tile" key={student.id}>
            <Link className="thumbnail" to={`/campus/${student.campusid}`}>
                <img style="width:210px;height:140px" src={student.imgageURL} />
                <div className="caption">
                    <h5>
                        <span>${student.name}</span>
                    </h5>
                    <ul>
                        <li> email: ${student.email} </li>
                        <li> campus: ${student.campusid}</li>
                        <li> id: ${student.id}</li>
                    </ul>
                    <button type="button" className="btn btn-default btn-group-sm">Update Student</button>
                    <button type="button" className="btn btn-danger btn-group-sm">Delete Student</button>
                </div>
            </Link >
        </div >
    );
};

export default OneStudent