import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampus extends Component {

    constructor() {
        super();
        this.state = {
            oneCampus: []
        };
    }

    componentDidMount() {
        axios.get(`/api/campus/${campusId}`)
            .then(res => res.data)
            .then(oneCampus => this.setState({ oneCampus }));
        console.log("one campus", oneCampus)
    }

    render() {

        const campus = this.state.oneCampus
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
            </div >
        );
    };

}