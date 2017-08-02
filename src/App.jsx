// @flow
import React from 'react';
import COLORS from './Colors';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import logo from './images/slack-logo.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="slack-logo" />
      </div>
      <div>
        <Toolbar color={COLORS[1]} />
      </div>
      <div className="listColor">
        <MessageList />
      </div>
    </div>

  );
}
