var controller = require('../api/controller.js');
var router = require('express').Router();

router.get('/products/:limit', controller.product.all);
router.get('/product/clear', controller.product.clear);
router.get('/product/initialize', controller.product.initialize);


module.exports = router;
