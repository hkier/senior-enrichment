import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowPix from './ShowPix'

export default class AllCampuses extends Component {

    constructor() {
        super();
        this.state = {
            campuses: [],
            students: []
        };
    }

    componentDidMount() {
        axios.get('/api/campus')
            .then(res => res.data)
            .then(campuses => this.setState({ campuses }));

        axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({ students }))

    }

    render() {

        const campuses = this.state.campuses
        const students = this.state.students
        return (
            <div>
                <h3>Campuses
            <button type="button" className="btn btn-default btn-group-sm">New Campus</button>
                </h3>
                <div className="row">
                    {
                        campuses.map(campus => (
                            <div className="col-xs-3 tile" key={campus.id}>
                                <Link className="thumbnail" to={`/campus/${campus.id}`}>
                                    <ShowPix url={campus.imageurl} />
                                    <div className="caption">
                                        <h5>
                                            <span>{campus.name}</span>
                                        </h5>
                                        <button type="button" className="btn btn-default btn-group-sm">List Students</button>
                                        <button type="button" className="btn btn-danger btn-group-sm">Delete Campus</button>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div >
            </div >
        );
    };

}