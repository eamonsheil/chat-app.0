const asyncHandler = require('express-async-handler')
import express, { Express, Request, Response } from 'express';

export const login = asyncHandler(async (req: Request, res: Response) => {
    console.log(req.body)
})

export const logout = asyncHandler(async (req: Request, res: Response) => {
    console.log(req)
})

