
const socket = io.connect('localhost:4000');
// const socket = io.connect('https://a1f02bbc.ngrok.io/');

socket.on('messages', (data) =>
  console.log(data.text)
);

socket.on('sentimentScore', (data) =>
  console.log('score received')
);
