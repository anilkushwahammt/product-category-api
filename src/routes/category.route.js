// imports
const express = require('express');
const {CategoryController} = require('../controllers')


// constants
const router = express.Router();
router.get('/', CategoryController.getCategories);

// exports
module.exports = router;