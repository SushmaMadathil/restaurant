var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
router.get("/types" , function (req, res) {
    var json = fs.readFileSync(path.join(__dirname, "..", "foods.json"), "utf8").trim();
    var types = JSON.parse(json);
    res.end(JSON.stringify({ types: types }));
});
router.get("/drinks", function (req, res) {
    var json = fs.readFileSync(path.join(__dirname, "..", "drinks.json"), "utf8").trim();
    var types = JSON.parse(json);

    res.end(JSON.stringify({ types: types }));
});

router.get("/appetizer", function (req, res) {
    var json = fs.readFileSync(path.join(__dirname, "..", "appetizer.json"), "utf8").trim();
    var types = JSON.parse(json);

    res.end(JSON.stringify({ types: types }));
});
router.get("/entree", function (req, res) {
    var json = fs.readFileSync(path.join(__dirname, "..", "entree.json"), "utf8").trim();
    var types = JSON.parse(json);

    res.end(JSON.stringify({ types: types }));
});
router.get("/dessert", function (req, res) {
    var json = fs.readFileSync(path.join(__dirname, "..", "dessert.json"), "utf8").trim();
    var types = JSON.parse(json);

    res.end(JSON.stringify({ types: types }));
});
module.exports = router;
