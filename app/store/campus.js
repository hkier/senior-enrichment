import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import axios from 'axios';

const midware = applyMiddleware(loggerMiddleware);

const initialState = {
    campuses: [],
    selectedCampus: ""
}


// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const PICK_CAMPUS = 'PICK_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS

export function getCampuses() { return { type: GET_CAMPUSES, } };

export function pickCampus(campus) { return { type: PICK_CAMPUS, selectedCampus: campus } }

export function updateCampus(campus) { return { type: UPDATE_CAMPUS, selectedCampus: campus } };

export function deleteCampus(campus) { return { type: DELETE_CAMPUS, selectedCampus: campus } }

// THUNK CREATORS

export function fetchCampuses() {
    return function thunk(dispatch) {
        axios.get('/api/campus')
            .then(res => res.data)
            .then(campuses => {
                const action = getCampuses(campuses);
                dispatch(action);
            });
    };
}

export function postCampus(campus) {

    return function thunk(dispatch) {
        return axios.post('/api/campus', campus)
            .then(res => res.data)
            .then(newCampus => {
                const action = getCampuses(campuses);
                dispatch(action);
            });
    };
}

export function deleteCampus(campus) {

    return function thunk(dispatch) {
        return axios.delete('/api/campus', campus)
            .then(res => res.data)
            .then(newCampus => {
                const action = getCampuses(campuses);
                dispatch(action);
            });
    };
}


// REDUCER

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return Object.assign({}, state, [campuses]);
        case PICK_CAMPUS:
            return Object.assign({}, state, { selectedCampus: action.campus });
        case UPDATE_CAMPUS:
            return Object.assign({}, state, { selectedCampus: action.campus });
        case DELETE_CAMPUS:
            return Object.assign({}, state, { selectedCampus: action.campus });
        default:
            return initialState;
    }
};