// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Setting up express
var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/anon_forum', { 
	useMongoClient: true
});
var db = mongoose.connection;

// Routes
app.get('/', function(req, res, next) {
	res.send('Please use /api/posts');
});

app.use('/api', require('./routes/api'));

// Start server
var port = 3000;
app.listen(port);
console.log('Listening on port ' + port);
