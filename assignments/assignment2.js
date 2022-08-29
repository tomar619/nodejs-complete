const express = require("express");
const { send } = require("process");

const app = express();

app.use('/users', (req, res, next) => {
    console.log('The Champions of Europe');
    res.send('<h1>Manchester City, Champions Forever</h1>');
});

app.use('/', (req, res, next) => {
    console.log("Hey, welcome to Manchester City");
    res.send('<h1>Welcome to Manchester City</h1>');
    //next();8
});

app.listen(3000);