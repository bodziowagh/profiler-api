// var http = require("http");
import http from "http";
import "dotenv/config";

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`Sending test var: ${ process.env.TEST_ENV_VAR }`);

		console.log("Respond has been sent sir!");
}).listen(8080);
