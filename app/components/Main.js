import React, { Component } from 'react';
import { Router as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import NewStudent from './NewStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store, { fetchCampuses, fetchStudents } from '../store/store';
import chalk from 'chalk'


export default class Main extends Component {

//this is the main momdule responsible for setup and routing.

componentDidMount () {
  console.log('component mounted')
  const campusesThunk = fetchCampuses();
  const studentsThunk = fetchStudents();
  store.dispatch(campusesThunk);
  store.dispatch(studentsThunk);
}
  render() {
    console.log('component rendered')
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/campus' component={AllCampuses} />
          <Route exact path='/students' component={AllStudents} />
          <Route exact path='/students/new' component={NewStudent}/>
          <Route exact path='/' component={AllCampuses} />
          <Route exact path='/campus/:campusid' component={SingleCampus} />'
          <Route exact path='/students/:studentid' component={SingleStudent} />'
        </Switch>
      </div>
    );
  }
}