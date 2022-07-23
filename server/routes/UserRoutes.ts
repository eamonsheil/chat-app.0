import express, { Express, Request, Response } from 'express';
const router = express.Router();
import { login, logout } from "../controllers/userController"

router.post('/login', login)

export default router;