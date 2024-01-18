import { BaseHttpError } from "./base-http-error.js";

export class BadRequestError extends BaseHttpError {
	statusCode = 400;
	constructor(msg) {
		this.message = msg;
	}
	serializeError() {
		return { msg: this.message };
	}
}
