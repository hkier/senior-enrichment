import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllStudents extends Component {

    constructor() {
        super();
        this.state = {
            students: []
        };
    }



    componentDidMount() {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({ students }));
    }

    render() {

        const students = this.state.students;
        return (
            <div>
                <h3>Students
    <button type="button" className="btn btn-default btn-group-sm">New Student</button>
                </h3>
                <div className="row">
                    {
                        students.map(student => (
                            <div className="col-xs-3 tile" key={student.id}>
                                <Link className="thumbnail" to={`/students/${student.id}`}>
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
}