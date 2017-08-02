// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';
import Message from './Message';
import messages from './messages.json';

export default function MessageList() {
  const messageIds = Object.keys(messages);
  return (
    <List celled >
      {messageIds.map(msgId =>
        <Message
          avatarUrl={messages[msgId].avatarUrl}
          name={messages[msgId].name}
          text={messages[msgId].text}
          timestamp={messages[msgId].timestamp}
        />
      )}
    </List>
  );
}
