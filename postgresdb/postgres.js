const Pool = require('pg').Pool;
const products = require('./config.js');

const pool = new Pool (products);

// for testing only
const getAll = (req, res) => {
  pool.query ('SELECT * FROM products ORDER BY productId ASC', (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).json(data.rows);
  })
}

module.exports = {
  getAll,
}
