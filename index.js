var express = require('express');
var app = express();

app.use(/*default*/ (req, res) => {
	var ipAddress = req.ip;
	console.log(ipAddress);
	var language = req.get('accept-language');
	console.log(language);
	var userAgent = req.get('user-agent');
	console.log(userAgent);

	res.send('hello');
});

app.listen(3000, ()=> {
	console.log('Listening on port 3000');
});