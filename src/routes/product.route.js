// imports
const express = require('express');
const {ProductController} = require('../controllers')


// constants
const router = express.Router();
router.get('/', ProductController.getProducts);

// exports
module.exports = router;