const express = require('express');
const bodyParser = require('body-parser');
//need to nom install or add a .d.ts file containing `declare module 'cookie-parser'`
// const cookieParser = require('cookie-parser');

const router = require('../routes');

const app = express();
//parse body
app.use(bodyParser.json());
//parse url
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

module.exports = app;
