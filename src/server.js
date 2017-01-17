var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.use('/public', express.static('./src/static'));

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello There' })
});

app.listen(3000, '0.0.0.0', function () {
	console.log('Example App Listening on Port 3000');
});