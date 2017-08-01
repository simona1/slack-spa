// @flow
import MessageList from './MessageList.js'
import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div />
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
