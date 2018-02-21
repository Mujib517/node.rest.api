var http = require('http'); //common js. AMD  define([],function(){})
var fs = require('fs');

function handleReq(req, res) {

    switch (req.url) {
        case '/':
            var contents = fs.readFileSync("index.html");
            res.write(contents);
            res.end();
            break;
        case '/products':
            res.write("Products");
            res.end();
            break;
        case '/books':
            var books = [{ id: 1, name: "Speaking JS", price: 100 },
            { id: 2, name: "Algorithms and DS", price: 50 },
            { id: 3, name: "Eloquent JS", price: 80 }];

            res.write(JSON.stringify(books));
            res.end();
            break;
        default:
            res.write("Hello NodeJS");
            res.end();
            break;
    }
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

