import express from "express";
import bodyParser from "body-parser";
import { configInit } from "./src/configs/config-init.js";
import { router } from "./src/routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use('/api', router)

configInit().then((config) => {
	app.listen(config.PORT, () =>
		console.log(`Server is listening on port ${config.PORT}`)
	);
});
