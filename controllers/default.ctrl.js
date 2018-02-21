var ctrl = {
    get: function (req, res) {
        res.status(200);
        res.send("Hello Express");
    },

    health: function (req, res) {
        var obj = {
            status: 'Up'
        };
        res.status(200);
        res.json(obj);
    }
};

module.exports = ctrl;