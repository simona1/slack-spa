// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';

type MessageProps = {
  avatarImage: string,
  name: string,
  text: string,
  timestamp: string,
};

export default function Message(
  { avatarImage, name, text, timestamp }: MessageProps,
) {
  return (
    <List.Item className="listItem">
      <Image avatar src={avatarImage} />
      <List.Content>
        <List.Header>
          {`${name}, ${timestamp}`}
          <List.Description>
            {text}
          </List.Description>
        </List.Header>
      </List.Content>
    </List.Item>
  );
}
