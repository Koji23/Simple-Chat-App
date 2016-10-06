const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, console.log('App listening on port:', port));

module.exports = app;