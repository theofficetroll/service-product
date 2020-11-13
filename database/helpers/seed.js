const mongoose = require('mongoose');
var Product = require('../model.js');
var generator = require('./generator.js');

const seed = (callback) => {
  let products = [];
  let limit = 10000000;
  Array(limit).fill().map((_, i) => {
    products.push({
      productId: i === 0 ? limit : i,
      name: generator.getName(),
      gender: generator.getGender(),
      category: generator.getCategory(),
      styles: [
        {
          styleId: (i === 0 ? limit : i) * 3,
          price: generator.getPrice(),
          options: generator.getOptions(),
        },
        {
          styleId: (i === 0 ? limit : i) * 3 + 1,
          price: generator.getPrice(),
          options: generator.getOptions(),

        },
        {
          styleId: (i === 0 ? limit : i) * 3 + 2,
          price: generator.getPrice(),
          options: generator.getOptions(),
        }]
    });
  });

  Product.insertMany(products, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
};

module.exports = seed;
