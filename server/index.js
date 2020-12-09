var express = require('express');
var compression = require('compression');
// var db = require('../database/connection.js');
// var pool = require('../postgresdb/postgres.js');
const Pool = require('pg').Pool;
const products = require('./../postgresdb/config.js');
const pool = new Pool (products);

require('newrelic');

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

// Moved CRUD here because data was getting mangled
app.get('/product/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const data = await pool.query('SELECT * FROM products WHERE productId = $1', [id]);

    if (!data) {
      return res.status(400).send('No such product');
    }
    res.status(200).send(data.rows[0]);
  }
  catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
})

app.post('/product/:id', async(req, res) => {
  try {
    const { productId, name, gender, category, styleId } = req.body;

    pool.query(
      'INSERT INTO products ( productId, name, gender, category, styleId ) VALUES ($1, $2, $3, $4, $5)',
    [ productId, name, gender, category, styleId ]);
    res.status(201).send(`Product added with ID: ${productId}`);
  }
  catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
})

app.put('/product/:id', async(req, res) => {
  try {
    const { productId, name, gender, category, styleId } = req.body;

    pool.query('UPDATE products SET productId = $1, name = $2, gender = $3, category = $4, styleId = $5 WHERE id = $1',
    [productId, name, gender, category, styleId]);
    res.status(200).send(`Product modified with ID: ${productId}`)
  }
  catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
})

app.delete('/product/:id', async(req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM products WHERE productId = $1', [id]);
    res.status(200).send(`Product deleted with ID: ${id}`);
  }
  catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
})

app.listen(3008, function() {
  console.log('listening on port 3008!');
});
