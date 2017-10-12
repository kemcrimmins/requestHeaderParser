var express = require('express');
var app = express();

app.enable('trust proxy');

app.use(/*default*/ (req, res) => {
	var ipAddress = req.ip;
	var language = /(?:(?!,).)*/.exec(req.get('accept-language'))[0]; // extract substring prior to first comma
	var software = /\(([^)]+)\)/.exec(req.get('user-agent'))[1]; // extract between first parentheses

	res.send({ipaddress: ipAddress, language: language, software: software});
});

app.listen(3000, ()=> {
	console.log('Listening on port 3000');
});