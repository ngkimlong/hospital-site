// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { HashRouter, Link, Route,Switch  } from 'react-router-dom';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import ManHinhStt from './components/ManHinhSTT';
import WelcomeForm from './components/WelcomeForm';
import ShowStt from './components/ShowStt'
/*
render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
*/
render (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Master} />
        <Route path="/add-item" component={CreateItem} />
        <Route path="/man-hinh-stt" component={ManHinhStt}/>
        <Route path="/scan-the" component={WelcomeForm}/>
        <Route path="/lay-stt" component={ShowStt}/>
      </Switch>
    </HashRouter>,
    document.getElementById('example')  
);