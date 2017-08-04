import { io } from 'socket.io';


const socket = io.connect('localhost:4000');
// const socket = io.connect('https://a1f02bbc.ngrok.io/');

socket.on('messages', data => data.text);

socket.on('sentimentScore', data => data.score);
