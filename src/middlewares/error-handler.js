import { BaseHttpError } from "../errors/base-http-error";

export const errorHandler = async (err, req, res, next) => {
	if (err instanceof BaseHttpError) {
		res.status(err.statusCode).send({ errors: err.serializeError() });
	}
};
