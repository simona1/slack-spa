// @flow

import React from 'react';
import { List } from 'semantic-ui-react';
import Message from './Message';
import type { MessageType } from './store';
import owl from './images/avatars/owl.png';


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
        const { avatarImage, name, text, timestamp } = messages[msgId];
        return (
          <Message
            key={msgId}
            avatarImage={owl}
            name={name}
            text={`${avatarImage} says: ` + text}
            timestamp={timestamp}
          />
        );
      })}
    </List>
  );
}
