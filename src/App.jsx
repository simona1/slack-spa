// @flow
import React from 'react';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;
