var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded()); axios

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log(`Listening on http://127.0.0.1:${app.get('port')}`);
}

