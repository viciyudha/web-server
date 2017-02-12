var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var middleware = require('./middleware.js');

app.use([middleware.requireAuthentication, middleware.logger]);

app.get('/about', function (req, res) {
	res.send('About Us');
} );

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Server started on port ' + port);
});