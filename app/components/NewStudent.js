import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import StudentForm from './StudentForm'

//this component is not fully functional.  It will display the form needed to add
// a new student.  This is the same form which is being used to update a student.

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