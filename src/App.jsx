// @flow
import React, {Component} from 'react';
import COLORS from './Colors';
import LoginView from './LoginView';
import MessageList from './MessageList';
import messages from './messages.json';
import Toolbar from './Toolbar';
import './App.css';
import type {Id, MessageType} from './store';

//import data from './socketConnection';

// type AppProps = {
//
// };
//
// export default function App(props: AppProps) {
//   // const messages = ...;

type AppProps = {

};


class App extends Component {
  state: {
    isShowingScores: boolean,
    messages: {[string]: {[Id]: MessageType}},
    score: mixed,
    hasScore: boolean,
    selectedChannel: ?string,
    slackSession: ?Object,
  };

  constructor(props: AppProps) {
    super(props);
    this.state = {
      isShowingScores: false,
      messages: messages,
      score: 6,
      hasScore: false,
      selectedChannel: '',
      slackSession: {},
    };
  }

  render() {
    return (
      <div>
        <LoginView isConnecting={false} />
        <div>
          <Toolbar
            color={COLORS[1]}
            score={this.state.score}
            scoreStatus={this.state.hasScore}
          />
        </div>
        <div className="listColor">
          <MessageList messages={messages} />
        </div>
      </div>
    );
  }
}

export default App;
