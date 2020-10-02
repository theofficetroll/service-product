var products = require('../database/repository.js');

module.exports = {
  product: {
    get: (req, res) => {
      products.get((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data);
        }
      })
    },
    initialize: (req, res) => {
      products.seed((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      })
    },
    clear: (req, res) => {
      console.log('clear');
      products.drop((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      })
    },
  }
}