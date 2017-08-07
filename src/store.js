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
  channelData: {[string]: ?{[Id]: {[Id]: MessageType}}},
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
    case 'RECEIVED_MESSAGES_FOR_CHANNEL':
      const newChannelData = { ...state.channelData };
      newChannelData[action.channel] = {...newChannelData[action.channel]};
      const messageIds = Object.keys(action.messages);
      messageIds.forEach(id => {
        newChannelData[action.channel][id] = action.messages[id];
      });
      return {
        ...state,
        channelData: newChannelData,
      };
    case 'RECEIVED_CURRENT_SCORE_FOR_CHANNEL':
        const scoreData = {...state.scoreData};
        scoreData[action.channel] = action.score;
        return {
          ...state,
          scoreData,
        }
    default:
      return state;
  }
}


//
// store.dispatch({type: 'RECEIVED_MESSAGES_FOR_CHANNEL', channel: '#random', messages: {"1": {"id": 1, "text": "lalaland", "avatarImage": "Lena", "name": "Lena Dunham", "timestamp": "2017-08-01"}, "2": {"id": 2, "text": "hi", "avatarImage": "Jenny", "name": "Jennifer", "timestamp": "2017-08-02"}}})

// store.dispatch({type: 'RECEIVED_CURRENT_SCORE_FOR_CHANNEL', channel: '#random', scoreData: 2})

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
