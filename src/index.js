// var http = require("http");
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import { getProfiles } from "./queries";

try {
	console.log("Initializing...");

	const host = process.env.HOST;

	if (!host) { throw "Host has not been defined!"; }

	const app = express();

	app.use(bodyParser.json());

	app.get("/", async (req, res) => {
		getProfiles().then((profiles) => {
			res.status(200).json(profiles.rows);
		}, (error) => {
			res.status(400).json(error);
		});
	});

	app.listen(host, () => {
		console.log(`SUCCESS: Listening at ${host}`);
	});
} catch (error) {
	console.log("FAILURE: An error occured while starting the server: ", error);

	throw error;
}
