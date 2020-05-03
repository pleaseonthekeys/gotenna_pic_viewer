const express = require('express');

const Photos = require('../controllers').Photos;

const router = express.Router();

router.get('/photos', Photos.renderPhotos);

module.exports = router;
