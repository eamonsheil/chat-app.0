import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from './Interfaces.server';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();



app.get('/', (req, res) => {
    res.send('Hello')
})

io.on('connection', (socket) => {
    console.log('a user has connected')
})

server.listen(4000, () => {
    console.log('listening on *:4000');
})

