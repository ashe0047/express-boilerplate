import { jwtVerify } from "jose";
import { BadRequestError } from "../errors/bad-request-error";

//Route protector middleware
export const authorize = async (req, res, next) => {
	try {
		const token = req.headers.authorization.replace("Bearer ", "");
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		const user = await jwtVerify(token, secret);
		req.user = user;
		next();
	} catch (e) {
        throw new BadRequestError('NOT UNAUTHORIZED')
    }
};
