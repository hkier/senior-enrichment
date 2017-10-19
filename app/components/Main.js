import React, { Component } from 'react';
import { Router as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store, { fetchCampuses } from '../store/store';


export default class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    console.log('did we mount?')
    store.dispatch(campusesThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/campus' component={AllCampuses} />
          <Route exact path='/students' component={AllStudents} />
          <Route exact path='/' component={AllCampuses} />
          <Route exact path='/campus/:campusid' component={SingleCampus} />'
          <Route exact path='/students/:studentid' component={SingleStudent} />'
        </Switch>
      </div>
    );
  }
}