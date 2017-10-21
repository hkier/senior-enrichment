import React, { Component } from 'react';
import { Link, withRouter, NavLink  } from 'react-router-dom';
import ShowPix from './ShowPix'
import { connect } from 'react-redux';

//This component is responsible for displaying all the campuses.  

function AllCampuses (props) {

let {campus} = props
         
        return (
            <div>
                <h3>Campuses
            <button type="button" className="btn btn-default btn-group-sm">New Campus</button>
                </h3>
                <div className="row">
                    {
                        campus.campuses.map(campus1 => (
                            <div className="col-xs-3 tile" key={campus1.id}>
                                <NavLink className="thumbnail" to={`/campus/${campus1.id}`}>
                                    <ShowPix url={campus1.imageurl} />
                                    <div className="caption">
                                        <h5>
                                            <span>{campus1.name}</span>
                                        </h5>
                                        <button type="button" className="btn btn-default btn-group-sm">List Students</button>
                                        <button type="button" className="btn btn-danger btn-group-sm">Delete Campus</button>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div >
            </div >
        );
    };

const mapStateToProps = function (state ){return {campus: state.campus}}
export default withRouter(connect(mapStateToProps)(AllCampuses));