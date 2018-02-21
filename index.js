var express = require('express');
var app = express();

var defaultRouter = require('./routes/default.router');

app.listen(3000, function () {
    console.log("Server is running...");
});

app.use('/', defaultRouter);

//http get
