const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ultimate-nike', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database...');
  })
  .catch((err) => {
    console.error(err, err.stack);
  });

const db = mongoose.connection;

module.exports = db;


