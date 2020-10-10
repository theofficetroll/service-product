var products = require('../database/repository.js');
var path = require('path');

module.exports = {
  product: {
    details: (req, res) => {
      products.find(req.params.id, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data);
        }
      });
    },
    all: (req, res) => {
      products.all(req.params.limit, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data);
        }
      });
    },
    initialize: (req, res) => {
      products.seed((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    },
    clear: (req, res) => {
      console.log('clear');
      products.drop((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    },
  }
};