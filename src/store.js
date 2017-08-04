// @flow

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

type Id = mixed;

export type MessageType = {
  avatarUrl: string,
  name: string,
  text: string,
  timestamp: string,
};

export type State = {
  isShowingScores: boolean,
  messages: {[string]: {[Id]: MessageType}},
  selectedChannel: ?string,
  // TODO: make type more specific
  slackSession: ?Object,
};

type Action = {
  type: string,
};

export function storeReducer(state: State, action: Action): State {
  return state;
}

const store = createStore(
  storeReducer,
  {
    isShowingScores: false,
    messages: {},
    selectedChannel: null,
    slackSession: null,
  },
  applyMiddleware(
    thunkMiddleware,
  ),
);

export default store;
