var seed = require('./helpers/seed.js');
var Product = require('./model.js');

module.exports = {
  all: (limit, callback) => {
    Product
      .find({})
      .limit(parseInt(limit))
      .exec((err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      })
  },
  seed: (callback) => {
    seed((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },
  drop: (callback) => {
    console.log('drop!');
    Product.db.dropCollection('products', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  }
};
