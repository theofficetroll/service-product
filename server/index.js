var express = require('express');
var parser = require('body-parser');
var db = require('../database/connection.js');
var seeder = require('../database/seed.js');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.get('/product', function (req, res) {
  res.send('ok');
});

app.get('/product/create', function (req, res) {
  res.send('ok');
});

app.get('/product/teardown', function (req, res) {
  res.send('ok');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

