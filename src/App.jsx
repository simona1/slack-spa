// @flow
import React from 'react';
import COLORS from './Colors';
import LoginView from './LoginView';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import './App.css';

export default function App() {
  return (
    <div>
      <LoginView isConnecting={false} />
      <div className="Message-view">
        <Toolbar color={COLORS[1]} />
      </div>
      <div className="listColor">
        <MessageList />
      </div>
    </div>
  );
}
