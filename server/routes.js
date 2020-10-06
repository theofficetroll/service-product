var controller = require('../api/controller.js');
var router = require('express').Router();
var express = require('express');


router.get('/products/all/:limit', controller.product.all);
router.get('/products/clear', controller.product.clear);
router.get('/products/initialize', controller.product.initialize);
router.get('/product/:id', controller.product.details);


module.exports = router;
