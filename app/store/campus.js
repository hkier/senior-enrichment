import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

const midware = applyMiddleware(loggerMiddleware);

// const initialState = {
// 	campuses: [],
// 	selectedCampus: ""

// }


// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const PICK_CAMPUS = 'PICK_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


export function getCampuses() { return { type: GET_CAMPUSES, } };

export function pickCampus(campus) { return { type: PICK_CAMPUS, selectedCampus: campus } }

export function  updateCampus(campus) {return { type: UPDATE_CAMPUS, selectedCampus: campus }};

export function deleteCampus(campus) {return {type: DELETE_CAMPUS, selectedCampus: campus}}
