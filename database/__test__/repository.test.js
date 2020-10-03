var mongoose = require('mongoose');
var db = require('../connection.js');
var products = require('../repository.js');

describe('product repository', () => {

  test('connects to db', done => {
    expect(db).toBeTruthy();
    done();
  });

  test('drops db', done => {
    products.drop((err, data) => {
      if (err) {
        console.log('=====', err.codeName);
        expect(err.codeName).toBe('NamespaceNotFound');
        done();
      } else {
        expect(data).toBe(true);
        console.log(data);
        done();
      }
    });
  });

  test('seeds db', done => {
    products.seed((err, data) => {
      if (err) {
        console.log('=====', err.codeName);
        done();
      } else {
        expect(data).toBeTruthy();
        done();
      }
    });
  });

});