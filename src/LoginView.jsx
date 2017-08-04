// @flow

import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import logo from './images/slack-logo.png';
import slackConnectHref from './connectWithSlackHref';
import slack from './images/slack_icon.png';

type LoginViewProps = {
  isConnecting: boolean,
};

export default function LoginView({ isConnecting }: LoginViewProps) {
  return (
    <div>
      <div className="SlackApp">
        <div className="SlackApp-header">
          <img src={logo} className="SlackApp-logo" alt="slack-logo" />
        </div>
        <div className="connectButton">
          <Button size="big" color={'teal'} href={slackConnectHref}>
            <Image avatar src={slack} />
            Connect with slack {isConnecting}
          </Button>
        </div>
      </div>
    </div>
  );
}
