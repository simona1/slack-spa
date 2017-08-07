// @flow

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import messages from './messages.json';

/* eslint-disable */
console.log('importing store');

export type Id = mixed;

export type MessageType = {
  avatarImage: string,
  name: string,
  text: string,
  timestamp: string,
};

// TODO: example object as the incoming `messages` structure
// {
//   123456: { userId: 'U6FMJ3J3Z',
// text: 'Here is a fantastic message.',
// date: 2017-08-04T17:01:15.178Z,
// rawTS: 123456,
// channelId: 'C6DUVSW3A' },
// }

// TODO: write function to sort rawTS a.k.a. messsageIds in decreasing order

export type State = {
  isShowingScores: boolean,
  isConnectedWithSlack: boolean,
  channelData: {[string]: ?{[Id]: MessageType}},
  scoreData: {[string]: ?number},
};

function storeReducer(state: State, action): State {
  console.log('got an action:', action);

  switch (action.type) {
    case 'CONNECTED_WITH_SLACK':
      return {
        ...state,
        isConnectedWithSlack: true,
      };
    case 'RECEIVED_CHANNEL_LIST':
      const channelData = {};
      action.channels.forEach((channel) => {
        channelData[channel] = null;
      });
      return {
        ...state,
        channelData,
      };

    default:
      return state;
  }
}

const store = createStore(
  storeReducer,
  {
    isShowingScores: false,
    isConnectedWithSlack: false,
    channelData: {},
    scoreData: {},
  },
  applyMiddleware(
    thunkMiddleware,
  ),
);

store.subscribe(() => {
  console.log('new store state: ', store.getState());
});

window.store = store;

export default store;
