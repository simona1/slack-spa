import { Thunk } from 'redux-testkit';
import {
  connectWithSlack,
  fetchChannels,
  processNewMessages,
  processNewScores,
  selectChannel,
} from '../Actions/index';

function mockPromise(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay || 2000);
  });
}

describe('Actions', () => {
  it('should return an action object from connecting with Slack', () => {
    const action = connectWithSlack();
    expect(action).toEqual({
      type: 'CONNECTED_WITH_SLACK',
    });
  });

  it('should return an action object from fetchChannels', async () => {
    const channels = await mockPromise(['#random', '#general', '#dev']);
    const dispatches = await Thunk(fetchChannels).execute();
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({
      channels,
      type: 'RECEIVED_CHANNEL_LIST',
    });
  });

  it('should return an action object from processNewMessages', () => {
    const newMessageData = {
      1: {
        1: 'This is a message',
      },
      2: {
        2: 'Here is another new message',
      },
    };
    const expectedAction = {
      messages: newMessageData,
      type: 'RECEIVED_NEW_MESSAGES',
    };
    expect(processNewMessages(newMessageData)).toEqual(expectedAction);
  });

  it('should return an action object from processNewScores', () => {
    const newScoreData = {
      '#random': 0.2,
    };
    const expectedAction = {
      scoreData: newScoreData,
      type: 'RECEIVED_NEW_SCORE',
    };
    expect(processNewScores(newScoreData)).toEqual(expectedAction);
  });

  it('should return an action object from selectChannel', () => {
    const channel = '#random';
    const expectedAction = {
      channel,
      type: 'SELECT_CHANNEL',
    };
    expect(selectChannel(channel)).toEqual(expectedAction);
  });
});
