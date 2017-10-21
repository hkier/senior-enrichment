//this is the student store.  No this is not where students buy books...
// this is where the information for the students are kept.  I
//currently use it to store the list of students (in a scaled application this
//would be updated with the list of "actively used" students.  But for such a 
//small database, all the students can be placed here upon loading.)  It also
//has the selectedStudent, 

import axios from 'axios';

const initialState = {
    students: [],
    selectedStudent: {}
}


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const PICK_STUDENT = 'PICK_STUDENT';
const UPDATE_STUDENT_RECORD = 'UPDATE_STUDENT_RECORD';
const UPDATE_STUDENT_EMAIL = 'UPDATE_STUDENT_EMAIL';
const UPDATE_STUDENT_CAMPUS = 'UPDATE_STUDENT_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS

export function getStudents(students) { return { type: GET_STUDENTS, students } };

export function pickStudent(student) { return { type: PICK_STUDENT, selectedStudent: student } }

export function updateStudentRecord(student) { return { type: UPDATE_STUDENT_RECORD, selectedStudent: student } };
export function updateStudentEmail(student) { return { type: UPDATE_STUDENT_EMAIL, selectedStudent: student } };
export function updateStudentCampus(student) { return { type: UPDATE_STUDENT_CAMPUS, selectedStudent: student } };

export function deleteStudent(student) { return { type: DELETE_STUDENT, selectedStudent: student } }

// THUNK CREATORS

export function fetchStudents() {
    return function thunk(dispatch) {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students);
                // console.log('inside fetchStudents Thunk', action)
                dispatch(action);
            });
    };
}

export function putStudent(student, id) {
    
        return function thunk(dispatch) {
            return axios.put(`/api/students/${id}`, student)
                .then(res => res.data)
                .then(newStudent => {
                    const action = getStudents(students);
                    dispatch(action);
                });
        };
    }

export function postStudent(student) {

    return function thunk(dispatch) {
        return axios.post('/api/students', student)
            .then(res => res.data)
            .then(newStudent => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
}

export function deletetheStudent(students) {

    return function thunk(dispatch) {
        return axios.delete('/api/students', student)
            .then(res => res.data)
            .then(newStudent => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
}


// REDUCER

export default (state = initialState, action) => {
    console.log('state in student reducer is', state, action)
    switch (action.type) {
        case GET_STUDENTS:
            console.log('changed to', Object.assign({}, state, { students: action.students }))
            return Object.assign({}, state, { students: action.students });
        case PICK_STUDENT:
            console.log('change to', Object.assign({}, state, { selectedStudent: action.selectedstudent }))
            return Object.assign({}, state, { selectedStudent: action.selectedstudent });
        case UPDATE_STUDENT_RECORD:
            console.log('WEEEEEEEEEE!!!!!!')
            console.log('change to', Object.assign({}, state, { selectedStudent: action.student }))
            return Object.assign({}, state, { selectedStudent: action.student });
        case UPDATE_STUDENT_EMAIL:
            console.log('change to', Object.assign({}, state, { selectedStudent: action.student }))
            return Object.assign({}, state, { selectedStudent: action.student });
        case UPDATE_STUDENT_CAMPUS:
            console.log('change to', Object.assign({}, state, { selectedStudent: action.student }))
            return Object.assign({}, state, { selectedStudent: action.student });
        case DELETE_STUDENT:
            console.log('change to', Object.assign({}, state, { selectedStudent: action.student }))
            return Object.assign({}, state, { selectedStudent: action.student });
        default:
            return state;
    }
};