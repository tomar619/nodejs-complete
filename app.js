//Core module import(no install required)
//const http = require('http');

//Third party import(npm install required)
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always works');
    next(); //Allows the request to continue to the next middleware in line
});

app.use('/add-product', (req, res, next) => {
    console.log('In add-product middleware');
    res.send('<h1>The "Add Product" page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express !!</h1>');
});

app.listen(3000);