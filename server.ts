import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from './Interfaces.server';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
const cors = require('cors');

app.use(cors());

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
    cors: {
        origin: 'http://localhost:3000/'
    }
});



app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello')
})

io.on('connection', (socket) => {
    console.log(socket.id, 'a user has connected')
})

server.listen(4000, () => {
    console.log('listening on *:4000');
})

