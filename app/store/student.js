import axios from 'axios';

const initialState = {
    students: [],
    selectedstudent: {}
}


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const PICK_STUDENT = 'PICK_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS

export function getStudents(students) { return { type: GET_STUDENTS, students } };

export function pickStudent(student) { return { type: PICK_STUDENT, selectedStudent: student } }

export function updateStudent(student) { return { type: UPDATE_STUDENT, selectedStudent: student } };

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
export function fetchStudentsForCampus(campusID) {

    axios.get(`/api/students/campus/${campusId}`)
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students);
            dispatch(action);
        });
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
    // console.log('state in student reducer is', state, action)
    switch (action.type) {
        case GET_STUDENTS:
        // console.log('changed to', Object.assign({}, state, { students: action.students }))
            return Object.assign({}, state, { students: action.students });
        case PICK_STUDENT:
            return Object.assign({}, state, { selectedStudent: action.student });
        case UPDATE_STUDENT:
            return Object.assign({}, state, { selectedStudent: action.student });
        case DELETE_STUDENT:
            return Object.assign({}, state, { selectedStudent: action.student });
        default:
            return state;
    }
};