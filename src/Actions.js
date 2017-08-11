// @flow

import type { State, MessageType, Id } from './store';
type Dispatch = ({ type: string }) => void;
type GetState = () => State;

// const PATH = 'https://databraid.localtunnel.me';
const PATH = 'http://localhost:4000/';

function fetchRequest(path, method = 'GET') {
  return fetch(path);
}


export function connectWithSlack() {
  return {
    type: 'CONNECTED_WITH_SLACK',
  };
}

export function fetchChannels() {
  return async function (dispatch: Dispatch) {
    const response = await fetchRequest(`${PATH}channels`);
    const channels = await response.json();
    console.log(channels);
    dispatch({
      channels,
      type: 'RECEIVED_CHANNEL_LIST',
    });
  };
}

export function fetchMessagesForChannel(channel: string) {
  return async function (dispatch: Dispatch, getState: GetState) {
    const oldMessages = getState().channelData[channel];
    if (oldMessages) {
      // Don't fetch again if we already have messages.
      return;
    }
    // Mark that we have messages to avoid fetching multiple times.
    dispatch({
      channel,
      messages: {},
      type: 'RECEIVED_MESSAGES_FOR_CHANNEL',
    });

    // TODO: replace with real Api call
    fetch('http://localhost:4000/messages');

    /*      dispatch({
    channel,
    messages,
    type: 'RECEIVED_MESSAGES_FOR_CHANNEL',
  }); */
  };
}

export function processNewMessages(newMessageData: {[string]: ?{[Id]: {[Id]: MessageType}}}) {
  // Mark that we have messages to avoid fetching multiple times.
  return {
    messages: newMessageData,
    type: 'RECEIVED_NEW_MESSAGES',
  };
}

export function processNewScores(scoreData: {[string]: number}) {
  return {
    scoreData,
    type: 'RECEIVED_NEW_SCORE',
  };
}

export function selectChannel(channel: string) {
  if (Math.random() > 0.5) {
    fetch('http://localhost:4000/score/happy');
  } else {
    fetch('http://localhost:4000/score/sad');
  }
  return {
    channel,
    type: 'SELECT_CHANNEL',
  };
}
