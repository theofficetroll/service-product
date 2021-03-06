module.exports = {
  entry: `./client/src/index.jsx`,
  output: {
    path: __dirname + '/client/dist',
    filename: './product-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};
