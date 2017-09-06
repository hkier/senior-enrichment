import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampus extends Component {

    constructor() {
        super();
        this.state = {
            oneCampus: [],
            students: []
        };
    }

    componentDidMount() {
        const campusId = this.props.match.params.campusid;
        axios.get(`/api/campus/${campusId}`)
            .then(res => res.data)
            .then(oneCampus => this.setState({ oneCampus }))
            .catch(err => err);
            
        axios.get(`/api/students/campus/${campusId}`)
            .then(res => res.data)
            .then(students => this.setState({ students }))
            .catch(err => err);
    }

    render() {

        const campus = this.state.oneCampus;
        const students = this.state.students;
        return (
            <div>
                <h3>
                    <span> {campus.name}</span>
                </h3>
                <div className="row">
                    {
                        <div className="col-xs-3 tile" key={campus.id}>
                            <div className="thumbnail" to={`/campus/${campus.id}`}>
                                <img className="campus-image" src={`${campus.imageurl}`} />
                            </div>
                        </div>

                    }
                </div >
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
            </div>
        );
    };

}