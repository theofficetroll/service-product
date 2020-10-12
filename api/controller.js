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
    }
  }
};