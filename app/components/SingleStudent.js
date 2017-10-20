import React, { Redirect, Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store, {
    dispatch,
    putStudent,
    pickStudent,
    // updateStudentCampus,
    // updateStudentEmail,
    // updateStudentName
    updateStudentRecord
} from '../store/store'


function SingleStudent(props) {
    const {
        // dispatch,
        student,
        // putStudent,
        // pickStudent,
        handleCampusChange,
        updateStudentRecord,
        // updateStudentName,
        // updateStudentEmail,
        // updateStudentCampus 
    } = props
    const studentId = Number(props.match.params.studentid)
    const students = props.student.students
    const campuses = props.campus.campuses
    const selectedStudent = students.filter(student => student.id === studentId)
    const selectedCampus = campuses.filter(campus => student.campusId === campus.Id)
    // confirmDelete(evt) {
    //     if (confirm('Delete the item?')) {
    //         console.log('this', this.state.oneStudent.id)
    //         axios.delete(`/api/students/${this.state.oneStudent.id}`)
    //             .then(res => {
    //                 this.props.history.push('/students') // got to go somewhere after student is deleted.
    //                 return res.data
    //             })
    //             .catch(err => console.error(err));
    //     };;
    // }


    return (

        <div className="col-xs-3 tile" key={selectedStudent.id}>
            <div className="caption">
                <form onSubmit={updateStudentRecord} >
                <input name='idnum' title={studentId} hidden/>
                    <table>
                        <tr>
                            <th></th>
                            <th>Old Information</th>
                            <th>New Information</th>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{selectedStudent[0].name}</td>
                            <td><span><input name='newName' type="text" /></span></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{selectedStudent[0].email}</td>
                            <td><span><input name='newEmail' type="text" /></span></td>
                        </tr>
                        <td>Campus:</td>
                        <td>{selectedCampus[0].name}</td>
                        <td><select name='newCampus' type="select" onChange={handleCampusChange}>
                            <option value="" disabled selected hidden>Select a Campus: </option>
                            {campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                        </select></td>
                    </table>
                    <button type="submit" className="btn btn-default btn-group-sm">Update Student</button>
                    {false && <button onClick={this.confirmDelete} type="button" className="btn btn-danger btn-group-sm">Delete Student</button>}
                </form>
            </div>
        </div >
    );
}

const mapDispatchToProps = function (dispatch) {

    return {
        handleCampusChange(evt) {
            evt.preventDefault();
            console.log('here I am')
        },
        updateStudentRecord(evt) {
            evt.preventDefault();
            const newCampus = evt.target.newCampus.value
            const newName = evt.target.newName.value
            const newEmail = evt.target.newEmail.value
            let action = updateStudentRecord({ campusId: newCampus, email: newEmail, name: newName })
            dispatch(action)
            putStudent(action.selectedStudent, evt.target.idnum.title)



        },
    };
};

const mapStateToProps = function (state) { return { student: state.student, campus: state.campus, selectedStudent: state.student.selectedStudent } }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));