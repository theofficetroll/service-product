var express = require('express');
var db = require('../database/connection.js');

// midddleware
var morgan = require('morgan');
var parser = require('body-parser');

// router
var router = require('./routes.js');

// run express server
var app = express();

// logging & parsing
app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// serve client files
// app.use('/home', express.static(__dirname + './../client/dist'));
app.use('/', router);

app.listen(3008, function() {
  console.log('listening on port 3008!');
});

