const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('../routes');

const app = express();
app.use(morgan('dev'));
//parse body
app.use(bodyParser.json());
//parse url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.use('/gotenna', router);

module.exports = app;
