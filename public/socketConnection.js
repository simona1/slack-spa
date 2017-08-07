/* eslint-disable */

const socket = io.connect('localhost:4000');
// const socket = io.connect('https://a1f02bbc.ngrok.io/');

const data = {};

socket.on('messages', (messages) => {
  console.log(messages);
  // this should dispatch an action
  data.messages = messages;
});

socket.on('score', (score) => {
  console.log(score);
  // this should dispatch an action
  data.score = score;
});

// TODO: remove
window.data = data;

// export data;
