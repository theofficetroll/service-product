const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
const DEST_DIR = path.join(__dirname, './client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DEST_DIR,
    filename: 'product-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining']
          }
        }
      }
    ]
  },
};