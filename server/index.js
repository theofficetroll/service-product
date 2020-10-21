var express = require('express');
var db = require('../database/connection.js');

// midddleware
var morgan = require('morgan');
var parser = require('body-parser');
const cors = require('cors');

// router
var router = require('./routes.js');

// run express server
var app = express();

// enable CORS
app.use(cors({
  origin: '*',
}));


// logging & parsing
app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// serve client files
app.use('/', express.static(__dirname + './../client/dist'));
app.use('/shop/:productId/:styleId', express.static(__dirname + './../client/dist'));
app.use('/', router);

app.listen(80, function() {
  console.log('listening on port 3008!');
});

