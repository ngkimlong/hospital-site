// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
import { HashRouter, Route,Switch  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

const history = createBrowserHistory();

render (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Master} />
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path='/edit-item/:id' component={EditItem} />
      </Switch>
    </HashRouter>,
    document.getElementById('example')  
);