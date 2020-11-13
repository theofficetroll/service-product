var controller = require('../api/newcontroller.js');
var router = require('express').Router();
var express = require('express');

router.get('/product/:id', controller.product.details);
router.post('/product/:id', controller.product.new);
router.put('product/:id', controller.product.update);
router.delete('product/:id', controller.product.remove);

module.exports = router;
