var Product = require('./model.js');
var generator = require('./generator.js');
var db = require('../database/connection.js');
const mongoose = require('mongoose');

let products = Array(10).fill().map((_, i) => {
  const product = new Product({
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
  console.log(product);
});

