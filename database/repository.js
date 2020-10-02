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
    console.log('drop!');
    Product.db.dropCollection('products', (err, res) => {
      if (err) {
        console.log('Product.db.dropCollection ERROR');
        callback(err);
      } else {
        console.log('good')
        callback(null, res);
      }
    })
  }
};
