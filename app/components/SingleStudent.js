import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {

        constructor() {
            super();
            this.state = {
                oneStudent: []
            };
        }

        componentDidMount() {
            const studentId = this.props.match.params.studentid;
            axios.get(`/api/students/${studentId}`)
                .then(res => res.data)
                .then(oneStudent => this.setState({ oneStudent }));
        }

        render(){

            const student = this.state.oneStudent;
            return (

                <div className="col-xs-3 tile" key={student.id}>
                    <div className="thumbnail" to={`/campus/${student.campusid}`}>
                        <div className="caption">
                            <h5>
                                <span>{student.name}</span>
                            </h5>
                            <ul>
                                <li> email: {student.email} </li>
                                <li> campus: {student.campusid}</li>
                                <li> id: {student.id}</li>
                            </ul>
                            <button type="button" className="btn btn-default btn-group-sm">Update Student</button>
                            <button type="button" className="btn btn-danger btn-group-sm">Delete Student</button>
                        </div>
                    </div >
                </div >
            );
        };
    
}