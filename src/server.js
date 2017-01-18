var express = require('express');

var app = express();

var PORT = process.env.port || 3000;

app.set('view engine', 'pug');
app.use('/public', express.static('./dist/static'));

app.get('/', function (req, res) {
	res.render('index')
});

app.listen(PORT, function () {
	console.log('Listening on', PORT);
});