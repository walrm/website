import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { about } from './aboutMe/about';
import {projects} from './projects/projects'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={about}/>
      <Route path="/projects" component={projects}/>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);