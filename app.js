const express = require('express');
const cors = require('cors')
const request = require("request");
const app = express();

app.use(cors());

app.all('/*', function(req, res, next)
{
	// Avoids unnecessary request.
	if (req.url === "/" || req.url === "/favicon.ico")
	{
		res.send("Please make a proper request to server such that: http://localhost:3000/https://www.example.com");
	}
	else
	{
		// Request options that coming from client's request
		const url = new URL(req.url.substr(1));
		const options = 
		{ 
			method: req.method,
			url: url,
			headers: req.headers,
		}

		if (options.headers.host) options.headers.host = url.hostname;	
		
		request(options, function (error, response, body) {
			if (error) console.log("Error:", error);
			res.statusCode = response.statusCode;
			let result = body;

			// Try to parse body if it is a json object
			if (response.headers["content-type"] === "application/json")
			{
				result = JSON.parse(body);
			}
			res.send(result);
		});
	}
});

module.exports = app;
