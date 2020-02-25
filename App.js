import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import Routes from './routes.js';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Routes></Routes>
        </HashRouter>
    );
  }
}

export default connect()(App);

