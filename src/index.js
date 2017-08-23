// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getSocket from './Sockets/';
//import openSocket from 'socket.io-client';
import { processNewScores, processNewMessages } from './Actions/index';
import type { Store } from 'redux';
import store from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(Provider, { store },
    React.createElement(App),
  ),
  document.getElementById('root'),
);
registerServiceWorker();

getSocket();
