// @flow
import React, { Component } from 'react';
import COLORS from './Colors';
import LoginView from './LoginView';
import MessageList from './MessageList';
//import messages from './messages.json';
import Toolbar from './Toolbar';
import './App.css';
import type { Id, MessageType } from './store';

import store from './store';

// import data from './socketConnection';

// type AppProps = {
//
// };
//
// export default function App(props: AppProps) {
//   // const messages = ...;

class App extends Component {
  componentWillMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = store.getState();

    if (!state.isConnectedWithSlack) {
      return <LoginView />;
    }

    return (
      <div>
        <div>
          <Toolbar
            color={COLORS[1]}
            score={6}
            isShowingScores={false}
          />
        </div>
        <div className="listColor">
          <MessageList selectedChannel={state.selectedChannel} />
        </div>
      </div>
    );
  }
}

export default App;
