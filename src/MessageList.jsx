// @flow

import React from 'react';
import { List } from 'semantic-ui-react';
import Message from './Message';

import type { MessageType } from './store';

type MessageListProps = {
  messages: {[mixed]: MessageType},
};

export default function MessageList(
  { messages }: MessageListProps,
) {
  const messageIds = Object.keys(messages);
  return (
    <List celled>
      {messageIds.map((msgId) => {
        const { avatarUrl, name, text, timestamp } = messages[msgId];
        return (
          <Message
            key={msgId}
            avatarUrl={avatarUrl}
            name={name}
            text={text}
            timestamp={timestamp}
          />
        );
      })}
    </List>
  );
}
