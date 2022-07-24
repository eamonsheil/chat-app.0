import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from './Interfaces.server';

import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv')

const app: Express = express();
const port = process.env.PORT

const http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
import cors from 'cors';
import UserRouter from './routes/UserRoutes'

app.use(cors());
app.use(express.json());
app.use('/api/user', UserRouter)


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});



app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

io.on('connection', (socket) => {
    console.log(socket.id, 'a user has connected')

    socket.on("message", (data) => {
        const answer = { ...data, sent: false }
        socket.broadcast.emit("recieve_message", answer)
        console.log("backend: ", data)
    })
})



server.listen(port, () => {
    console.log('listening on *:4000');
})

