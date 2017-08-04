// @flow

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

type Id = mixed;

export type MessageType = {
  avatarImage: string,
  name: string,
  text: string,
  timestamp: string,
};

//TODO: example object as the incoming `messages` structure
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
  messages: {[string]: {[Id]: MessageType}},
  selectedChannel: ?string,
  // TODO: make type more specific
  slackSession: ?Object,
};

type Action = {
  type: string,
};

export function storeReducer(state: State, action: Action): State {
  let newMessages: {[string]: {[Id]: MessageType}};
  switch (action.type) {
    case 'SLACK_LOGIN':
      return {
        ...state,

      };
    default:
      return state;

  }
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
