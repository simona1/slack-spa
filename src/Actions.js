// @flow

// import Api from './Api.js';
import type { State } from './store';

import fakeMessages from './messages.json';

type Dispatch = ({type: string}) => void;
type GetState = () => State;

function fakePromise(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), delay || 2000);
  });
}

const Actions = {
  connectWithSlack() {
    return {
      type: 'CONNECTED_WITH_SLACK',
    };
  },

  fetchChannels() {
    return async function(dispatch: Dispatch) {
      // TODO: replace with real Api call
      const channels = await fakePromise(['#random', '#general', '#redux']);
      dispatch({
        channels,
        type: 'RECEIVED_CHANNEL_LIST',
      });
    };
  },

  processNewMessages(newMessageData: {}) {
    // Mark that we have messages to avoid fetching multiple times.
    return {
      messages: newMessageData,
      type: 'RECEIVED_NEW_MESSAGES',
    };
  },


  fetchMessagesForChannel(channel: string) {
    return async function(dispatch: Dispatch, getState: GetState) {
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

      let messages = fakeMessages;

      switch (channel) {
        case '#random':
          messages = {
            12345: {
              "id": 12345,
              "text": "Make it so!",
              "avatarImage": "Picard",
              "name": "Captain Picard",
              "timestamp": "2017-08-01"
            },
          };
          break;
        case '#general':
          messages = fakeMessages;
          break;
        case '#redux':
          messages = fakeMessages;
          break;
        default:
          return;
      }

      // TODO: replace with real Api call
      messages = await fakePromise(messages);

      dispatch({
        channel,
        messages,
        type: 'RECEIVED_MESSAGES_FOR_CHANNEL',
      });
    };
  },

  selectChannel(channel: string) {
    return {
      channel,
      type: 'SELECT_CHANNEL',
    };
  },
};

export default Actions;
