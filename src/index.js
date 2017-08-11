// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import openSocket from 'socket.io-client';
import {processNewScores, processNewMessages} from './Actions';
import store from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(Provider, {store},
    React.createElement(App),
  ),
  document.getElementById('root'),
);
registerServiceWorker();

const socket = openSocket('http://localhost:4000');
// const socket = openSocket('https://databraid.localtunnel.me');


socket.on('messages', (messages) => {
  store.dispatch(processNewMessages(messages));
});

socket.on('score', (scoreData) => {
  store.dispatch(processNewScores(scoreData));
});
