// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import convertScoreToColorAndEmoji from './convertScoreToColorAndEmoji';
import './App.css';
import store from './store';

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
    const {isConnectedWithSlack, currentScore, selectedChannel} = this.props;
    //const state = this.props;
    //const currentScore = state.scoreData[state.selectedChannel] || 0.01;
    // const computedColor = convertScoreToColorAndEmoji(currentScore).color;
    // const computedEmoji = convertScoreToColorAndEmoji(currentScore).emoji;

    if (!isConnectedWithSlack) {
      return <LoginView />;
    }

    return (
      <div>
        <div>
          <Toolbar
            // color={computedColor}
            //score={currentScore}
            //isShowingScores={false}
          />
        </div>
        <div className="listColor">
          <MessageList selectedChannel={selectedChannel} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  const currentScore = state.scoreData[state.selectedChannel] || 0.01;
  const messages = state.channelData[state.selectedChannel] || {};
  return {
    //isShowingScores: state.isShowingScores,
    messages,
    score: state.score,
    selectedChannel: state.selectedChannel,
    isConnectedWithSlack: state.isConnectedWithSlack,
    // slackSession: state.slackSession,
    currentScore,
  }
  };


export default connect(mapStateToProps)(App);
