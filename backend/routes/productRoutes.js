const express = require('express');
const Router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

// @desc GET all products from db
// @route GET /api/routes
// @access Public
Router.get('/', getAllProducts)
//router or Router

// @desc GET a products by id from db
// @route GET /api/routes
// @access Public
Router.get('/:id', getProductById)

module.exports= Router;