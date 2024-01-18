import { BaseHttpError } from "./base-http-error.js";

export class NotFoundError extends BaseHttpError {
	statusCode = 404;
	constructor() {
		this.message = `Error ${this.statusCode} Not Found`;
	}
	serializeError() {
		return [{ msg: this.message }];
	}
}
