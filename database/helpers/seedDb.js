var db = require('./../connection.js');
var seed = require('./seed.js');

seed((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});