const express = require('express');

const Photos = require('./photos');

const router = express.Router();

router.use('/', Photos);

module.exports = router;
