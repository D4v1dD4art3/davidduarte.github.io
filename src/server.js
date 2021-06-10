const express = require('express');
const morgan = require('morgan');
const app = express();

// environment variables
app.set('port', process.env.PORT || 4000);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes
app.use('/api/projects', require('./routes/projects.routes.js'));
module.exports = app;
