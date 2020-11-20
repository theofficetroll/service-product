const Pool = require('pg').Pool;
const products = require('./config.js');

const pool = new Pool (products);

// for testing only
const getAll = (req, res) => {
  pool.query ('SELECT * FROM products ORDER BY id ASC', (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).json(data.rows);
  })
}

const get = (req, res) => {
  const id = parseInt(req.params.id, (err, data) => {
    pool.query('SELECT * FROM products WHERE id = $1', [id], (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data.rows);
    })
  })
}

const newEntry = (req, res) => {
  const { productId, name, gender, category, styleId } = req.body;

  pool.query(
    'INSERT INTO products ( productId, name, gender, category, styleId ) VALUES ($1, $2, $3, $4, $5)',
  [ productId, name, gender, category, styleId ],
  (err, data) => {
    if (err) {
      throw err;
    }
    res.status(201).send(`Product added with ID: ${data.insertId}`);
  })
}

const update = (req, res) => {
  const { productId, name, gender, category, styleId } = req.body;

  pool.query('UPDATE products SET productId = $1, name = $2, gender = $3, category = $4, styleId = $5 WHERE id = $1',
  [name, email, id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product modified with ID: ${id}`)
  })
}

const remove = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM products WHERE id = $1', [id], (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`Product deleted with ID: ${id}`);
  })
}

module.exports = {
  get,
  getAll,
  newEntry,
  newTable,
  remove,
  update,
}
