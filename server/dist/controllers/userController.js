"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const asyncHandler = require('express-async-handler');
exports.login = asyncHandler(async (req, res) => {
    console.log(req.body);
});
exports.logout = asyncHandler(async (req, res) => {
    console.log(req);
});
