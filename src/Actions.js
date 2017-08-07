// @flow

// import Api from './Api.js';
import type { State } from './store';

type Dispatch = ({type: string}) => void;
type GetState = () => State;

// function getSelectedMessageIds(state: State) {
//   return Object.keys(state.selection);
// }

const Actions = {
  selectChannel(selectedChannel: string) {
    return {
      selectedChannel,
      type: 'SELECT_CHANNEL',
    };
  }



};

export default Actions;
