'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import Main from './components/Main'

render (
  <Router>
    <Main/>
  </Router>,
  document.getElementById('sky')
)