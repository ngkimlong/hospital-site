// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { HashRouter, Link, Route,Switch  } from 'react-router-dom';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
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
      </Switch>
    </HashRouter>,
    document.getElementById('example')  
);