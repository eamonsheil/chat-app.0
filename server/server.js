"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    socket.on("message", function (data) {
        var answer = __assign(__assign({}, data), { sent: false });
        socket.broadcast.emit("recieve_message", answer);
        console.log("backend: ", data);
    });
});
server.listen(4000, function () {
    console.log('listening on *:4000');
});
