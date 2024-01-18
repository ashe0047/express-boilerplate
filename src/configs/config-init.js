import dotenv from "dotenv";
import { randomBytes } from "node:crypto";
export const configInit = async () => {
	//import env
	dotenv.config();

	//express config
	const PORT = process.env.HOST_PORT;

	//jwt config
	const secret = randomBytes(64).toString("hex");
	process.env.JWT_SECRET = secret;
	return { PORT };
};
