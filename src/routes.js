'use sctrict';

const express = require('express');
const router = express.Router();

const ProductController = require('./app/controllers/product/ProductController');

router.get('/version', (req, res) => res.status(200).send({version: "0.0.1"}));
router.post('/product', ProductController.post);

module.exports = router;