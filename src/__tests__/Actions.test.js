jest.mock('../Api.js');

import {storeReducer} from '../store.js';
import Actions from '../Actions.js';
import Api from '../Api.js';

// connectWithSlack
// fetchChannels
// fetchMessagesForChannel
// selectChannel

describe('Actions', () => {
  it('should return an action object from changeSubject', () => {
    const action = Actions.connectWithSlack();
    expect(action).toEqual({
      type: 'CONNECTED_WITH_SLACK',
    });
  });

  // it('should return an action object from deleteMessages', () => {
  //   const action = Actions.fetchChannels();
  //   const dispatch = jest.fn();
  //   const getState = function() {
  //     return {
  //       selection: {3: true, 5: true},
  //     };
  //   };
  //   Api.deleteMessages = jest.fn();
  //
  //   expect(dispatch).toHaveBeenCalledTimes(0);
  //   expect(Api.deleteMessages).toHaveBeenCalledTimes(0);
  //
  //   action(dispatch, getState);
  //
  //   expect(dispatch).toHaveBeenCalledTimes(1);
  //   expect(dispatch).toHaveBeenCalledWith({type: 'DELETE_MESSAGES'});
  //
  //   expect(Api.deleteMessages).toHaveBeenCalledTimes(1);
  //   expect(Api.deleteMessages).toHaveBeenCalledWith(['3', '5']);
  // });
});
