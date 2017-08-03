// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';

type MessageProps = {
  avatarUrl: string,
  name: string,
  text: string,
  timestamp: any,
};

export default function Message({ avatarUrl, name, text, timestamp }: MessageProps) {
  return (
    <List.Item className="listItem">
      <Image avatar src={avatarUrl} />
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
