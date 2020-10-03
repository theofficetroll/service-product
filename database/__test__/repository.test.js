var db = require('../connection.js');
var Product = require('../model.js');
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

  test('/products/all returns an array of products ', done => {
    products.all(1, (err, data) => {
      if (err) {
        console.log('=====', err.codeName);
        done();
      } else {
        expect(data).toBeInstanceOf(Array);
        done();
      }
    });
  });

  test('/product/:id returns a valid object', done => {
    let testId = 99999;

    let product = {
      productId: testId,
      name: 'test product',
      gender: 'test gender',
      category: 'test category',
      styles: [
        {
          styleId: '001',
          price: '100',
          options: ''
        },
        {
          styleId: '002',
          price: '100',
          options: ''

        },
        {
          styleId: '003',
          price: '100',
          options: ''
        }
      ]
    };

    Product.create(product, (err, res) => {
      if (err) {
        console.log('=====', err.codeName);
        done();
      } else {
        products.find(testId, (err, data) => {
          expect(data.productId).toBeDefined();
          expect(data.name).toBeDefined();
          expect(data.gender).toBeDefined();
          expect(data.category).toBeDefined();
          expect(data.styles).toBeDefined();
          expect(data.styles).toHaveLength(3);
          expect(data.styles[0].styleId).toBeDefined();
          expect(data.styles[0].price).toBeDefined();
          expect(data.styles[0].options).toBeDefined();
          done();
        });
      }
    });

  });

  test('/product/:unknowId returns {}', done => {
    let testId = 99999;
    const isEmpty = (obj) => {
      for (var p in obj) {
        return false;
      }
      return true;
    };

    Product.deleteOne({ productId: testId }, (err, res) => {
      products.find(testId, (err, data) => {
        expect(data).toBeDefined();
        expect(isEmpty(data)).toBeTruthy;
        done();
      });
    });
  });

});