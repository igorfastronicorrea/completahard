'use sctrict';

const express = require('express');
const router = express.Router();

const UserController = require('./app/controllers/user/userController');

router.get('/version', (req, res) => res.status(200).send({ version: "0.0.1" }));
router.post('/user', UserController.post);

module.exports = router;

/* 4017CDA458157214E44C2A5B4D67B560 Nome do domínio: jogoserio*/