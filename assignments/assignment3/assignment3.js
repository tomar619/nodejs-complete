const express = require('express');
const path = require('path');

const homeRoutes = require('./home');
const usersRoutes = require('./users');

const app = express();

app.use(express.static(path.join(__dirname, 'css')));

app.use(usersRoutes);
app.use(homeRoutes);

app.listen(3000);