const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  productId: {
    type: String
  },
  name: {
    type: String
  },
  gender: {
    type: String
  },
  category: {
    type: String
  },
  styles: [
    {
      styleId: String,
      price: String,
      options: String
    }
  ]
});

const product = mongoose.model('product', productSchema, 'Product');
module.exports = product;
