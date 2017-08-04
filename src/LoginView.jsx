// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';

type LoginViewProps = {
  isConnecting: boolean,
};

export default function LoginView({isConnecting}: LoginViewProps) {
  return (
    <Button size='big'>
      Big slack-logo
    </Button>
  );
}
