import { checkSchema } from "express-validator";

//Auth request input validator
export const signUpValidator = checkSchema({
    name:{
        trim: true,
        isString: true
    },
    username: {
        trim: true,
        isString: true,
        toLowerCase: true,
        isLength:{options:{min: 4}},
        errorMessage: "Username is invalid"
        
    },
    email:{
        trim: true,
        isString: true,
        toLowerCase: true,
        isEmail: true,
        errorMessage: "Invalid email"
    },
    password: {
        trim: true,
        isString: true,
        isLength: { options: { min: 6, max: 20 } },
    },
    phoneNum: {
        trim: true,
        isString: true,
    }
});

export const signInValidator = checkSchema({
	username: {
		trim: true,
		isString: true,
		toLowerCase: true,
		isLength: { options: { min: 4 } },
		errorMessage: "Username is invalid",
	},
	password: {
		trim: true,
		isString: true,
		isLength: { options: { min: 6, max: 20 } },
	},
});
