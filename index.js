var express = require('express');
var app = express();

var defaultRouter = require('./routes/default.router');
var bookRouter = require('./routes/book.router');

app.listen(3000, function () {
    console.log("Server is running...");
});

app.use('/', defaultRouter);
app.use('/api/books', bookRouter);

//http get
