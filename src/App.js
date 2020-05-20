import React from 'react';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {PrivateRoute} from './components/PrivateRoute';
//const jwt = require('jsonwebtoken');

import Button from 'react-bootstrap/Button';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

export class App extends React.Component {
  state={
    authorized:false,
  }

  login = () => {
    this.setState({
      authorized: true,
    })
  }

  logout = () => {
    this.setState({
      authorized: false,
    })
  }

  signup = () => {
    this.setState({
      authorized: true,
    })
  }

  render(){

    const {authorized} = this.state;

    return (
      <BrowserRouter>
      <div className="container">
        <Switch>
          <PrivateRoute exact path='/home' authorized={authorized}>
            <Home logout={this.logout}/>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login login={this.login} authorized={authorized}/>
          </Route>
          <Route exact path='/signup'>
            <Signup login={this.signup} authorized={authorized}/>
          </Route>
  
          {
            this.state.authorized ?
            <Redirect to='/home' /> :
            <Redirect to='/login' />
          }
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
};

export default App;
