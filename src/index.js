// var http = require("http");
import http from "http";
import "dotenv/config";

try {
	console.log("Initializing...");

	const host = process.env.HOST;	// TODO: handle null

	if (!host) {
		throw "Host has not been defined!";
	}

	http.createServer(function (req, res) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`Sending test var: ${ process.env.TEST_ENV_VAR }`);

			console.log("Respond has been sent sir!");
	}).listen(host);

	console.log(`SUCCESS: Listening at ${host}`);
} catch (error) {
	console.log("FAILURE: An error occured while starting the server: ", error);

	throw error;
}
