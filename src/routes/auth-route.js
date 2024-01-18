import { Router } from "express"
import { signInValidator, signUpValidator } from "../middlewares/auth-validator.js"



export const authRouter = Router()

authRouter.post('/signup', signUpValidator)
authRouter.post('/signin', signInValidator)
