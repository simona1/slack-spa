import { shallow } from 'enzyme';
import { Thunk } from 'redux-testkit';
import toJson from 'enzyme-to-json';
import React from 'react';
import Actions from '../Actions.js';

// connectWithSlack  \,
// fetchChannels \,
// processNewMessages \,
// fetchMessagesForChannel
// selectChannel \,

//Why aren't there dispatches for connectWithSlack, processNewMessages, and selectChannel?

function fakePromise(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), delay || 2000);
  });
}

describe('Actions', () => {

  it('should return an action object from changeSubject', () => {
    const action = Actions.connectWithSlack();
    expect(action).toEqual({
      type: 'CONNECTED_WITH_SLACK',
    });
  });

  it('should return an action object from fetchChannels', async () => {
    const channels = await fakePromise(['#random', '#general', '#redux']);
    const dispatches = await Thunk(Actions.fetchChannels).execute();
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
      1: {
        2: 'Here is another new message',
      }
    };

    const expectedAction = {
      messages: newMessageData,
      type: 'RECEIVED_NEW_MESSAGES',
    };

    expect(Actions.processNewMessages(newMessageData)).toEqual(expectedAction);
  });

  it('should return an action object from fetchMessagesForChannel', async () => {
    // const channels = await fakePromise(['#random', '#general', '#redux']);
    // const dispatches = await Thunk(Actions.fetchChannels).execute();
    // expect(dispatches.length).toBe(1);
    // expect(dispatches[0].isPlainObject()).toBe(true);
    // expect(dispatches[0].getAction()).toEqual({
    //   channels,
    //   type: 'RECEIVED_CHANNEL_LIST',
    // });


    //I don't understand what's supposed to be happening in this action???
  });

  it('should return an action object from selectChannel', () => {
    const channel =  "general";

    const expectedAction = {
      channel,
      type: 'SELECT_CHANNEL',
    };

    expect(Actions.selectChannel(channel)).toEqual(expectedAction);
  });
});
