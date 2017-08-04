// @flow

// import Api from './Api.js';
import type { State } from './store';

type Dispatch = ({type: string}) => void;
type GetState = () => State;

// function getSelectedMessageIds(state: State) {
//   return Object.keys(state.selection);
// }

const Actions = {
  // slackLogin()

  // changeSubject(subject: string) {
  //   return {
  //     subject,
  //     type: 'CHANGE_SUBJECT',
  //   };
  // },
  //
  // deleteMessages() {
  //   return function(dispatch: Dispatch, getState: GetState) {
  //     const messageIds = getSelectedMessageIds(getState());
  //     dispatch({
  //       type: 'DELETE_MESSAGES',
  //     });
  //     Api.deleteMessages(messageIds);
  //   };
  // },
  //
  // fetchMessages() {
  //   return async function(dispatch: Dispatch) {
  //     const messages = await Api.getMessages();
  //     dispatch({
  //       messages,
  //       type: 'FETCH_MESSAGES',
  //     });
  //   };
  // },

};

export default Actions;
