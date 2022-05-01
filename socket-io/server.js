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
    socket.on("message", (data) => {
      socket.broadcast.emit('message', data) //broadcast will emit to all users except the current
    })
});

server.listen(3000);