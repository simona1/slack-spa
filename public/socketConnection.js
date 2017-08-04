const socket = io.connect('localhost:4000');
// const socket = io.connect('https://a1f02bbc.ngrok.io/');

socket.on('messages', data =>
  console.log(data)
);

socket.on('score', data =>
 console.log(data)
);
