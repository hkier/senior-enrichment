import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentForm from './StudentForm'

function NewStudent (props) {

return (
    <div>
    <h4>Add New Student</h4>
    <StudentForm/>
    </div>

)

}

const mapDispatchToProps = function (dispatch) {
    return {
      handleChange (evt) {
        dispatch(updateName(evt.target.value));
      }
    };
  };

const mapStateToProps = function (state) { return { student: state.student, campus: state.campus } }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewStudent));