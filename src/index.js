// var http = require("http");
import http from "http";
import express from "express";
import "dotenv/config";

try {
	console.log("Initializing...");

	const host = process.env.HOST;

	if (!host) { throw "Host has not been defined!"; }

	const app = express();

	app.get("/", (req, res) => {
  	res.send("GET /");
	});

	app.listen(host, () => {
		console.log(`SUCCESS: Listening at ${host}`);
	});
} catch (error) {
	console.log("FAILURE: An error occured while starting the server: ", error);

	throw error;
}
