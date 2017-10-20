import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class StudentForm extends Component {



    // exporting the constructor function (dumb component).
    // what is the parameter coming in here?
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleCampusChange(event) {
        this.props.xxxxxxxxxx(event.target.value)
    }

    handleSubmit(event) {
        this.props.xxxxxxxxxx(event.target.value)
    }


    render() {
        console.log(this.props)
        let campuses = this.props.campuses
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Student's Name: </label>
                <input type="text" />
                <label>Student's Email: </label>
                <input type="text" />
                <select type="select" onChange={this.handleCampusChange}>
                    <label>Select a Campus: </label>
                    {campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                </select>
                <input type="submit" value="Submit" />
            </form>
        )
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
      handleChange (evt) {
        dispatch(updateName(evt.target.value));
      }
    };
  };
const mapStateToProps = function (state) { return { student: state.student, campus: state.campus } }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentForm));