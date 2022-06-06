// imports
const express = require('express');
const {ProductController} = require('../controllers')


// constants
const router = express.Router();
router.get('/', ProductController.getProducts);
router.post('/transfer_state', ProductController.transferProductState);

// exports
module.exports = router;