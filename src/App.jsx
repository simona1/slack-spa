// @flow
import React from 'react';
import COLORS from './Colors';
import LoginView from './LoginView';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import logo from './images/slack-logo.png';
import './App.css';

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="slack-logo" />
        </div>
        <div className="connectButton">
          <LoginView />
        </div>
      </div>


      <div className="Message-view">
        <Toolbar color={COLORS[1]} />
      </div>
      <div className="listColor">
        <MessageList />
      </div>
    </div>
  );
}
