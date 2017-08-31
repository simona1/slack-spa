// @flow

/* eslint-disable */
import React from 'react';
import { List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessagesForChannel} from '../Actions/index';
import Message from './Message';
import owl from '../images/avatars/owl.png';
import type { Dispatch, OwnProps, State } from '../FlowTypes/';

import injectWidgetId from '../Utils/utils';

class MessageList extends React.Component {
  props: {
    selectedChannel: ?string,
    messages: {},
    fetchMessagesForChannel: Function,
  }

  render() {
    let { messages, selectedChannel, fetchMessagesForChannel } = this.props;

    if (!messages) {
      if (selectedChannel) {
        fetchMessagesForChannel(selectedChannel);
      }
      messages = {};
    }

    const messageIds = Object.keys(messages);

    // TODO: Specific user info needs to be added to Message: user_name, first_name, last_Name, avatar_img, status_emoji, etc.
    // TODO: Specific message info needs to be added to Message: text, timestamp
    // NOTE: The above TODOs will come from the store and fetched from DB routes that have not been fully built out in the API
//     const { selectedChannel } = this.props;
//     let { messages } = this.props;
//
// // TODO: remove this code - will fetch messages through sockets
//     if (!messages) {
//       if (selectedChannel) {
//         setTimeout(
//           () => fetchMessagesForChannel(selectedChannel),
//           0,
//         );
//       }
//       messages = {};
//     }
//
//     const messageIds = Object.keys(messages);

    return (
      <List celled>
        {messageIds.map((msgId) => {
          const { avatarImage, name, text, timestamp } = messages[msgId];
          return (
            <Message
              key={msgId}
              avatarImage={owl}
              name={name}
              text={`${avatarImage} says: ${text}`}
              timestamp={timestamp}
            />
          );
        })}
      </List>
    );
  }
}

export { MessageList };

export const mapStateToProps = (state: State, ownProps: OwnProps) => {
  let id = ownProps.widgetId;
  const messages = state.widgets.byId[id].channelData[state.widgets.byId[id].selectedChannel];
  return {
    messages,
    selectedChannel: state.widgets.byId[id].selectedChannel,
    // currentScore,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMessagesForChannel }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(MessageList));
