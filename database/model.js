const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  productId: {
    type: Number
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

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
