const path = require('path');
const { env } = require('process');
const SRC_DIR = path.join(__dirname, './client/src');
const DEST_DIR = path.join(__dirname, './client/dist');
const webpack = require('webpack');
const dotenv = require('dotenv');

let envKeys = null;
let variables = () => {
  const env = dotenv.config().parsed;

  envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

};
variables();
console.log(envKeys);

module.exports = {
  node: {
    fs: 'empty'
  },
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
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ]

};