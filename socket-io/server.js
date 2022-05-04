const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const server = require("http").createServer(app);

const io = require('socket.io')(server, cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}))

app.set('view engine', 'ejs')

app.get('/home', (req,res) => {
  res.render('home')
})

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.join('main');
    socket.on("message", (data) => { //data is [message, room]
      socket.to(data[1]).emit('message', data[0]);
    })
    socket.on("join", (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
    })
});

server.listen(3000);