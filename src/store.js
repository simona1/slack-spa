// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeReducer from './Reducers/index.js';

export type Id = mixed;

export type MessageType = {
  avatarImage: string,
  name: string,
  text: string,
  timestamp: string,
};

type ChannelData = {[string]: ?{[Id]: {[Id]: MessageType}}};

export type State = {
  // isShowingScores: boolean,
  isConnectedWithSlack: boolean,
  channelData: ChannelData,
  scoreData: {[string]: ?number},
  selectedChannel: ?string,
};

/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(storeReducer,
  {
    isShowingScores: false,   // will need this later
    isConnectedWithSlack: false,
    channelData: {},
    scoreData: {},
    selectedChannel: null,
  }, composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ));


/* eslint-disable */
store.subscribe(() => {
  console.log('State: ', store.getState());
});

// TODO: remove
window.store = store;

export default store;
