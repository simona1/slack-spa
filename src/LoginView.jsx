// @flow

import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import slackConnectHref from './connectWithSlackHref';
import slack from './images/Slack_Icon.png';


type LoginViewProps = {
  isConnecting: boolean,
};

export default function LoginView({ isConnecting }: LoginViewProps) {
  const conect = isConnecting;
  return (
    <Button size="big" color={"teal"} href={slackConnectHref}>
      <Image avatar src={slack} />
      Connect with slack
    </Button>
  );
}
