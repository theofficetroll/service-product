const mongoose = require('mongoose');
var Product = require('../model.js');
var generator = require('./generator.js');

const seed = (callback) => {
  let products = [];
  Array(100).fill().map((_, i) => {
    products.push({
      productId: i === 0 ? 100 : i,
      name: generator.getName(i),
      gender: generator.getGender(i),
      category: generator.getCategory(),
      styles: [
        {
          styleId: '001',
          price: generator.getPrice(i),
          options: generator.getOptions(i)
        },
        {
          styleId: '002',
          price: generator.getPrice(i),
          options: generator.getOptions(i)

        },
        {
          styleId: '003',
          price: generator.getPrice(i),
          options: generator.getOptions(i)
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

