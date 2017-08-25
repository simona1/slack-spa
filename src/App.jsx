// @flow

/* eslint-disable */

/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from './Components/LoginView';
import MessageList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import type { State } from './FlowTypes/';
import './App.css';
import { WIDGET_ID } from './Constants/';

const PropTypes = require('prop-types');


class App extends Component {
  getChildContext() {
    return { widgetId: this.props.widgetId };
  }

  props: {
    isConnectedWithSlack: boolean,
    selectedChannel: mixed,
    widgetId: string,
  };

  render() {
    const { isConnectedWithSlack, selectedChannel } = this.props;

    console.log('^^^', isConnectedWithSlack);

    if (!isConnectedWithSlack) {
      return <LoginView />;
    }

    return (
      <div>
        <div>
          <Toolbar />
        </div>
        <div className="listColor">
          <MessageList selectedChannel={selectedChannel} />
        </div>
      </div>
    );
  }
}


App.propTypes = {
  widgetId: PropTypes.string.isRequired,
};

App.defaultProps = {
  widgetId: WIDGET_ID,
  isShowingScores: false,   // will need this later
  isConnectedWithSlack: false,
  channelData: {'#redux': {}},
  scoreData: {'score': 0.01},
  selectedChannel: null,
};

App.childContextTypes = {
  widgetId: PropTypes.string,
}

export const mapStateToProps = (state: State, ownProps) => {
  const id = ownProps.widgetId;
  console.log('$$$', state, ownProps);
  // let channelData = {'#redux': {}}
  // let selectedChannel = '#redux';
  // let messages = {};

  const currentScore = state.widgets.byId[id].scoreData[state.widgets.byId[id].selectedChannel];
  const messages = state.widgets.byId[id].channelData[state.widgets.byId[id].selectedChannel];

  const isConnectedWithSlack = state.widgets.byId[id].isConnectedWithSlack;
  const selectedChannel = state.widgets.byId[id].selectedChannel;
  const score = state.widgets.byId[id].score;
  const isShowingScores = state.widgets.byId[id].isShowingScores;

  return {
    isShowingScores,
    messages,
    score,
    selectedChannel,
    isConnectedWithSlack,
    // slackSession: state.slackSession,
    currentScore,
  };
};

export default connect(mapStateToProps)(App);
