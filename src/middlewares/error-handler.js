import { BaseHttpError } from "../errors/base-http-error.js";

export const errorHandler = async (err, req, res, next) => {
	if (err instanceof BaseHttpError) {
		res.status(err.statusCode).send({ errors: err.serializeError() });
	}
    console.error(err)
};
