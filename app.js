require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const index = require('./routes/index.routes');
const authPatientRoutes = require('./routes/authPatient.routes');
const protectedRoutes = require('./routes/protectedRoutes.routes');

// require database configuration
require('./configs/db.config');
require('./configs/session.config')(app);

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
/* app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); */

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use('/', index);
app.use('/', authPatientRoutes);
app.use('/', protectedRoutes);

module.exports = app;
