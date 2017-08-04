// @flow
import React from 'react';
import COLORS from './Colors';
import LoginView from './LoginView';
import MessageList from './MessageList';
import messages from './messages.json';
import Toolbar from './Toolbar';
import './App.css';

type AppProps = {

};

export default function App(props: AppProps) {
  // const messages = ...;
  return (
    <div>
      <LoginView isConnecting={false} />
      <div>
        <Toolbar color={COLORS[1]} />
      </div>
      <div className="listColor">
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
