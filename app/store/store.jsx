import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))


import campus from './campus'
import student from './student'

const reducer = combineReducers({
    campus,
    student
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        createLogger()
    ))
);

export default store;

// export action creators
export * from './student'
export * from './campus'