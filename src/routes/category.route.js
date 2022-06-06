// imports
const express = require('express');
const categoryController = require('../controllers/category')


// constants
const router = express.Router();
router.get('/', categoryController.getCategories);

// exports
module.exports = router;