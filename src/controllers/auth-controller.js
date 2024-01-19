import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";

export const signIn = async (req, res) => {
	const { password, username } = req.body;
	//Find user to see if active
	const user = await UserService.getUser({ username }).then(
		async (userData) => {
			if (!userData) res.status(401).send("Invalid credentials provided");
			const isValidPassword = await bcrypt.compare(
				password,
				userData.password
			);
			if (!isValidPassword)
				res.status(401).send("Invalid credentials provided");
			const secret = new TextEncoder().encode(process.env.JWT_SECRET);
			const jwt = await new SignJWT({
				userId: userData.id,
				username: userData.username,
			})
				.setProtectedHeader({ alg: "HS256" })
				.setExpirationTime("15mins")
				.setIssuedAt()
				.sign(secret);
			return { ...userData, token: jwt };
		}
	);

	res.status(201).send(user);
};

export const signUp = async (req, res) => {
	const { password2, ...rest } = req.body;
	const user = await UserService.createUser({
		...rest,
		password: await bcrypt.hash(rest.password1, process.env.SALT_LEN),
	}).then(async (userData) => {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		const jwt = await new SignJWT({
			userId: userData.id,
			username: userData.username,
		})
			.setProtectedHeader({ alg: "HS256" })
			.setExpirationTime("15mins")
			.setIssuedAt()
			.sign(secret);
		return { ...userData, token: jwt };
	});
	res.status(201).send(user);
};

