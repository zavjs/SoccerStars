var express = require('express');
var app = express();
var athletes = require('./src/data/athletes');

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'pug');
app.use('/public', express.static('./dist/static'));

app.get('*', function (req, res) {
	res.render('index');
});

app.listen(app.get('port'), function () {
	console.log('Listening on', app.get('port'));
});