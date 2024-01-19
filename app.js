import express from "express";
import bodyParser from "body-parser";
import { configInit } from "./src/configs/config-init.js";
import { router } from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/error-handler.js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();

app.use(bodyParser.json());
app.use("/api", router);

//Uncomment this when deploying as combined app
// app.use(express.static(path.join('public')))
// app.use((req, res, next) => {
// 	res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

app.use(errorHandler);
configInit().then((config) => {
	app.listen(config.PORT, () =>
		console.log(`Server is listening on port ${config.PORT}`)
	);
});
