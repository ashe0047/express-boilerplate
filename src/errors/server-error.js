import { BaseHttpError } from "./base-http-error.js";

export class ServerError extends BaseHttpError {
	statusCode = 500;
	constructor() {
		this.message = "Internal server error occured. Please try again later";
	}
	serializeError() {
		return [{ msg: this.message }];
	}
}
