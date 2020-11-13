var seed = require('./helpers/seed.js');
var Product = require('./model.js');

module.exports = {
  find: (id, callback) => {
    Product
      .find({ productId: id })
      .exec((err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res.length >= 1 ? res[0] : {});
        }
      });
  },
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
      });
  },
  seed: (callback) => {
    seed((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  drop: (callback) => {
    Product.db.dropCollection('products', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },
  new: (data, callback) => {
    Product.db.insert((err, data.params) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })

  },
  update: (id, callback) => {
    Product.findOneAndUpdate({ productId: id })
    .exec((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  },
  remove: (id, callback) => {
    Product.deleteOne({ productId: id })
    .exec((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  }
};
