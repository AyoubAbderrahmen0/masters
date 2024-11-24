const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  // Gérer un appel entrant
  socket.on('video-offer', (data) => {
    socket.to(data.to).emit('video-offer', data.offer);
  });

  // Répondre à un appel vidéo avec une réponse
  socket.on('video-answer', (data) => {
    socket.to(data.to).emit('video-answer', data.answer);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(2000, () => {
  console.log('Server is running on port 2000');
});
