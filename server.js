"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var socket_io_1 = require("socket.io");
var cors = require('cors');
app.use(cors());
var io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
app.get('/', function (req, res) {
    res.send('Hello');
});
io.on('connection', function (socket) {
    console.log(socket.id, 'a user has connected');
});
server.listen(4000, function () {
    console.log('listening on *:4000');
});
