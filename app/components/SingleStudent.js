import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {

    constructor() {
        super();
        this.state = {
            oneStudent: [],
            oneCampus: []
        };
    }

    componentDidMount() {
        const studentId = this.props.match.params.studentid;
        axios.get(`/api/students/${studentId}`)
            .then(res => res.data)
            .then(oneStudent => this.setState({ oneStudent }))
            .then(() => {
                return axios.get(`/api/campus/${this.state.oneStudent.campusId}`)
            })
            .then(res => res.data)
            .then(data => { 
                return data
            })
            .then(oneCampus => this.setState({ oneCampus }))
            .catch(err => console.error (err));
    }

    render() {

        const student = this.state.oneStudent;
        const campus = this.state.oneCampus;
        return (

            <div className="col-xs-3 tile" key={student.id}>
                <div className="thumbnail" to={`/campus/${student.campusid}`}>
                    <div className="caption">
                        <h5>
                            <span>{student.name}</span>
                        </h5>
                        <ul>
                            <li> email: {student.email} </li>
                            <li> campus: {campus.name}</li>
                            <li> student id: {student.id}</li>
                        </ul>
                        <button type="button" className="btn btn-default btn-group-sm">Update Student</button>
                        <button type="button" className="btn btn-danger btn-group-sm">Delete Student</button>
                    </div>
                </div >
            </div >
        );
    };
}