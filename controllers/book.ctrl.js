var books = [{ id: 1, name: "Speakig JS", price: 100 },
{ id: 2, name: "Eloquent JS", price: 80 },
{ id: 3, name: "Algos and DS", price: 50 }];

function BookCtrl() {

    this.get = function (req, res) {

        res.status(200);
        res.json(books);
    }

    this.getById = function (req, res) {
        var book;
        //var id = parseInt(req.params.id);
        var id = +req.params.id;

        for (var i = 0; i < books.length; i++) {
            if (books[i].id === id) book = books[i];
        }
        if (book) {
            res.status(200);
            res.json(book);
        }
        else {
            res.status(404);
            res.send("Not found");
        }
    }

    this.save = function (req, res) {
        var book = req.body;
        console.log(book);
        books.push(book);

        res.status(201);//Created
        res.json(book);
    }
}

var ctrl = new BookCtrl();
module.exports = ctrl;