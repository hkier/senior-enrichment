import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import ShowPix from './ShowPix'
import Student from './Student'
import { connect } from 'react-redux';



function SingleCampus(props) {


    const campusId = props.match.params.campusid;
    const campuses = props.campus.campuses
    const selectedCampus = campuses.filter((campus) => { campus.id = campusId })
    const student = props.student

    return (
        <div>
            <h3>
                <span> {selectedCampus.name}</span>
            </h3>
            <div className="row">
                {
                    <div className="col-xs-3 tile" key={selectedCampus.id}>
                        <div className="thumbnail" to={`/campus/${selectedCampus.id}`}>
                            <ShowPix url={'/' + selectedCampus.imageurl} />
                        </div>
                    </div>

                }
            </div>
            <div>
                <h3>Students
                 <button type="button" className="btn btn-default btn-group-sm">New Student</button>
                </h3>
                <div className="row">
                    {console.log('student!!!!!!!!!', student)}
                    {student.students.map(student1 => (
                        <Student student={student1} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = function (state) { return { campus: state.campus, student: state.student } }
export default withRouter(connect(mapStateToProps)(SingleCampus));   