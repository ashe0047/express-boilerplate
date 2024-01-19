import { Router } from "express"
import { signInValidator, signUpValidator } from "../middlewares/auth-validator.js"
import { signIn, signUp } from "../controllers/auth-controller.js"



export const authRouter = Router()

authRouter.post('/signup', signUpValidator, signUp)
authRouter.post('/signin', signInValidator, signIn)
