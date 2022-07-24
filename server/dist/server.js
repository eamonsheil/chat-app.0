"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
const app = (0, express_1.default)();
const port = process.env.PORT;
const http = require('http');
const server = http.createServer(app);
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/user', UserRoutes_1.default);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
app.get('/', (req, res) => {
    res.send('Hello');
});
io.on('connection', (socket) => {
    console.log(socket.id, 'a user has connected');
    socket.on("message", (data) => {
        const answer = { ...data, sent: false };
        socket.broadcast.emit("recieve_message", answer);
        console.log("backend: ", data);
    });
});
server.listen(port, () => {
    console.log('listening on *:4000');
});
