// @flow
import type { Action, ChannelData, State } from '../FlowTypes/';

export default function storeReducer(state: State, action: Action): State {
  let newChannelData: ChannelData;
  let newScoreData: {[string]: ?number};

  let newSelectedChannel;
  switch (action.type) {
    case 'CONNECTED_WITH_SLACK':
      return {
        ...state,
        isConnectedWithSlack: true,
      };

    case 'SELECT_CHANNEL':
      return {
        ...state,
        selectedChannel: action.channel,
      };

    case 'RECEIVED_CHANNEL_LIST':
      newChannelData = { ...state.channelData };
      action.channels.forEach((channel) => {
        newChannelData[channel] = newChannelData[channel] || null;
      });
      newSelectedChannel = state.selectedChannel;
      if (!newSelectedChannel) {
        newSelectedChannel = action.channels[0];
      }
      return {
        ...state,
        channelData: newChannelData,
        selectedChannel: newSelectedChannel,
      };
    case 'RECEIVED_MESSAGES_FOR_CHANNEL':
      newChannelData = { ...state.channelData };
      newChannelData[action.channel] = { ...newChannelData[action.channel] };
      Object.keys(action.messages).forEach((id) => {
        newChannelData[action.channel][id] = action.messages[id];
      });
      return {
        ...state,
        channelData: newChannelData,
      };

    case 'RECEIVED_NEW_SCORE':
      newScoreData = { ...state.scoreData, ...action.scoreData };
      return {
        ...state,
        isShowingScores: true,
        scoreData: newScoreData,
      };
    case 'SHOW_SCORE':
      return {
        ...state,
        isShowingScores: true,
      };

    case 'RECEIVED_NEW_MESSAGES':
      newChannelData = { ...state.channelData };
      Object.keys(action.messages).forEach((channelId) => {
        newChannelData[channelId] = { ...newChannelData[channelId] };
        Object.keys(action.messages[channelId]).forEach((messageId) => {
          newChannelData[channelId][messageId] = action.messages[channelId][messageId];
        });
      });

      return {
        ...state,
        channelData: newChannelData,
      };

    default:
      return state;
  }
}
