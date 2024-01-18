
export class BaseHttpError extends Error{
    statusCode

    constructor(){
        if(this.constructor === HttpError) throw new Error("BaseHttpError class cannot be instantiated directly")
        if(this.serializeError === undefined) throw new Error("Please implement the serializeError method")
    }
}