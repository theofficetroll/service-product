var express = require('express');
var compression = require('compression');
var db = require('../database/connection.js');

// middleware
var morgan = require('morgan');
var parser = require('body-parser');
const cors = require('cors');

// router
var router = require('./newroutes.js');

// run express server
var app = express();

// compress responses
const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard filter function
  return compression.filter(req, res);
};
app.use(compression({ filter: shouldCompress, threshold: 0}));

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

app.listen(3008, function() {
  console.log('listening on port 3008!');
});

