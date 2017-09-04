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
        <main>
          <h1>Some Filler</h1>
          <AllCampuses/>
          <AllStudents/>
          <h1>The End</h1>
        </main>
      </div>
    );
  }
}