'use strict';

var express = require('express');
var controller = require('./location.controller');

var router = express.Router();

router.get('/:id', controller.index);

module.exports = router;
