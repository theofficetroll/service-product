var controller = require('../api/controller.js');
var router = require('express').Router();
var express = require('express');

router.get('/product/:id', controller.product.details);

module.exports = router;
