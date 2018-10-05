var express = require('express');
var router = express.Router();

/*router.post("/", function (req, res) {
    var cart = req.body;
    if (cart instanceof Array) {
        var items = [];
        var order = {
            username: req.session.loginAs,
            items: [],
            created: newDate()
        };
        for (var i = 0; i < cart.length; i++) {
            var line = cart[i]
            // get the actual item from the line.id
        }
        res.send("Saved");
    }
    else {
        res.send("error");
    }
});*/

/*router.post("/cart", function (req, res) {
    var config = require('config');
    var cart = loadCart();
    var item = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };
    cart.push(item);
    fs.writeFileSync(config.datapath + '/cart.json', JSON.stringify(users), "utf8");
    var response = {
        item: item,
        error: ""
    };
    res.end(JSON.stringify(response));
});
function loadCart() {
    var config = require('config');
    var json = fs.readFileSync(config.datapath + '/cart.json', "utf8").trim();
    var cart = JSON.parse(json);
    return cart;
}*/

