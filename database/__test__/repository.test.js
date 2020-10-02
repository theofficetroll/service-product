var db = require('../connection.js');
var products = require('../repository.js');


test('query db', (done) => {
  let any = () => {
    try {
      products.drop((err, data) => {
        if (err) {
          console.log('line 38', err);
        } else {
          console.log(data);
          done();
        }
       });
    } catch (err) {
      console.log('line 45', err);
      done();
    }
  };
  any();
});

test('adds 1 =2  to equal 3', () => {
  let x = 1 + 2;
  expect(x).toBe(3);
});