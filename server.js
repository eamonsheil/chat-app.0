"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(server);
app.get('/', function (req, res) {
    res.send('Hello');
});
io.on('connection', function (socket) {
    console.log('a user has connected');
});
server.listen(4000, function () {
    console.log('listening on *:4000');
});
