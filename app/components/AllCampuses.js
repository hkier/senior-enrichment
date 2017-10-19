import React, { Component } from 'react';
import { Link, withRouter, NavLink  } from 'react-router-dom';
import ShowPix from './ShowPix'
import { connect } from 'react-redux';

// export default class AllCampuses extends Component {


function AllCampuses (props) {

let {campuses} = props
console.log ('the props are:',props)
  campuses = campuses ? campuses : []
         
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

const mapStateToProps = function (state ){
return {campuses: state.campus}
}
export default withRouter(connect(mapStateToProps)(AllCampuses));