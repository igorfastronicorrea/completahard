const express = require('express');
const router = express.Router();

router.get('/version', (req, res) => res.status(200).send({version: "0.0.1"}));

module.exports = router;