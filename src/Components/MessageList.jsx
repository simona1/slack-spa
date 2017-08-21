// @flow

import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from './Message';
import owl from '../images/avatars/owl.png';

import { fetchMessagesForChannel } from '../Actions/index.js';

export class MessageList extends React.Component {

  props: {
    selectedChannel: ?string,
    messages: {},
  }

  render() {
    const { selectedChannel } = this.props;
    let { messages } = this.props;
    // let messages = store.getState().channelData[this.props.selectedChannel];
    if (!messages) {
      if (selectedChannel) {
        setTimeout(
          () => fetchMessagesForChannel(selectedChannel),
          0,
        );
      }
      messages = {};
    }

    const messageIds = Object.keys(messages);

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

export const mapStateToProps = (state, ownProps) => {
  const messages = state.channelData[state.selectedChannel];
  return {
    messages,
    selectedChannel: state.selectedChannel,
    // currentScore,
  };
};

// const fetchMessagesForChannel = Actions.fetchMessagesForChannel;
export const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMessagesForChannel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
