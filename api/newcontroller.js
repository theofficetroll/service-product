var products = require('../database/repository.js');
var path = require('path');

// TODO
// When the new databases are set up
// Rename 'all' to something more appropriate
// Also make sure that newroutes.js is calling the correct method.

module.exports = {
  product: {
    details: (req, res) => {
      products.find(req.params.id, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(data);
        }
      });
    },
    all: (req, res) => {
      products.all(req.params.limit, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(data);
        }
      });
    },
    new: (req, res) => {
      products.add(req.params.id, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      });
    },
    update: (req, res) => {
      products.update(req.params.id, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      })
    },
    remove: (req, res) => {
      products.remove(req.params.id, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      })
    }
  }
};
