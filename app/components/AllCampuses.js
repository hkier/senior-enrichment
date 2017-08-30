import React from 'react';
import { Link } from 'react-router-dom';

const AllCampuses = (props) => {

    const campuses = props.campuses;

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
                                <img style="width:210px;height:140px" src={campus.campusUrl} />
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

export default AllCampuses;