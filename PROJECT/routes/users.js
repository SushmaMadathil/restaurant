//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function (req, res) {
 //   res.send('respond with a resource');
//});
var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function (req, res) {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);

    //ADD SOME CODES here to only show the name and email fields to the public.

    res.end(JSON.stringify(users));
});

router.post("/add", function (req, res) {
    var config = require('config');
    var users = loadUsers();
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    var flag = false;
    for (var i = 0; i < users.length; i++)
    {
        if (user.name == users[i].name && user.password == users[i].password)
        {
            res.send("Username already exists.");
            flag = true;
        }
    }

    if (flag == false)
    {
        users.push(user);
    }
    fs.writeFileSync(config.datapath + '/users.json', JSON.stringify(users), "utf8");
    var response = {
        user: user,
        error: ""
    };
    res.end(JSON.stringify(response));
});
function loadUsers() {
    var config = require('config');
    var json = fs.readFileSync(config.datapath + '/users.json', "utf8").trim();
    var users = JSON.parse(json);
    return users;
}
router.post("/check", function (req, res) {
    var config = require('config');
    var users = loadUsers();
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

        var resp = {
            message: ""
        }

    for (var i = 0; i < users.length; i++)
    {
        if ((user.name == users[i].name) && (user.password == users[i].password)) {
            var session = req.session;
            session.loginAs = user.name;
            resp.message = "YOU HAVE SUCCESSFULLY LOGGED IN as "+ user.name;
            //req.session.name = user.name;
            //req.session.save();
            break;
        }
        else {
            resp.message = "LOG IN FAILED";
        }
        }
    res.send(resp);

    //router.get('/Cart', function (req, res) {
      //  var config = require('config');
      //  var json = fs.readFileSync(config.dataPath + '/users.json', 'utf8').trim();
      //  var users = JSON.parse(json);



});


    module.exports = router;