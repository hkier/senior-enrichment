import React, { Component } from 'react';
import { Router as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';


export default class Main extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <Switch>
        <main>
          <Route exact path='/campus' component={AllCampuses}/>
          <Route exact path='/students' component={AllStudents}/>
          <Route exact path='/' component={AllCampuses}/>
          <Route exact path='/campus/:campusid' component={SingleCampus}/>'
          <Route exact path='/students/:studentid' component={SingleStudent}/>'
        </main>
        </Switch>
      </div>
    );
  }
}