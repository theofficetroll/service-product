var db = require('./../connection.js');
var products = require('../repository.js');


products.seed((err, data) => {
  if (err) {
    console.error('error', err.stack);
    process.exit(1);
  } else {
    console.log(null, data);
    console.log('Db created and seeded successfully');
    process.exit();
  }
});