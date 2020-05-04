const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const router = require('../routes');

const app = express();

const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
};

app.use(cors(defaultCorsHeaders));
app.use(morgan('dev'));
//parse body
app.use(bodyParser.json());
//parse url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.use('/gotenna', router);

module.exports = app;
