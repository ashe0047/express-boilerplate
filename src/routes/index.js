import { Router } from "express";
import { authRouter } from "./auth-route.js";


export const router = Router()

router.use('/auth', authRouter)