var db = require('./../connection.js');
var products = require('../repository.js');


products.drop((err, data) => {
  if (err) {
    console.error('error', err.stack);
    process.exit(1);
  } else {
    if (data) {
      console.log('Db dropped!');
    }
    process.exit();
  }
});