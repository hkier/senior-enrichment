import React from 'react';
import { Link } from 'react-router-dom';

//displays the navbar on all screens

const Navbar = (props) => {

    const navbar = props.navbar

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">SKYHIGH    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/campus">Campuses <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/students">Students</a>
                        <a className="nav-item nav-link disabled">Classes</a>
                        <a className="nav-item nav-link disabled">Schedules</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
