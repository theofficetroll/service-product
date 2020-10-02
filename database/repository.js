var seed = require('./helpers/seed.js');
var Product = require('./model.js');

module.exports = {
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
    Product.db.dropCollection('products', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  }
};
