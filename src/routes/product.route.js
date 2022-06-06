// imports
const express = require('express');
const productController = require('../controllers/product')


// constants
const router = express.Router();
router.get('/', productController.getProducts);

// exports
module.exports = router;