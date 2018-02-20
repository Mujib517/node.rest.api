var http = require('http'); //common js. AMD  define([],function(){})

function handleReq(req, res) {
    res.write("Hello NodeJS");
    res.end();
}

var server = http.createServer(handleReq);

function callback() {
    console.log("Server is running on 3000");
}

server.listen(3000, callback);

// File IO
// DB IO
// setTimeout, setInterval
// Web service calls

