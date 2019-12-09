var path = require('path');
var express = require('express');
var fs = require('fs');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const uuidv1 = require('uuid/v1');
var app = express();

var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));
var groups = require('./groups.json');

app.get('/', function (req, res) {
    res.render('greetUser', {title: 'Sign in'});
});

app.post('/', function (req, res) {
    res.clearCookie('name');
    res.cookie('name', req.body.name);
    res.send();
});

app.get('/myGroups', function (req, res) {
    name = req.cookies.name;
    groups = require('./groups.json');
    //Using the cookies.name create a new array of groups where the user is a member of and send that
    //as the post data in the render function below v
    res.render('myGroups', {title: 'My Groups'});
});

app.get('/findGroups', function (req, res, next) {
    groups = require('./groups.json');
    res.render('findGroups', {title: 'Find Group', groupsData: groups});
});

app.get('/createGroup', function (req, res) {
    res.render('createGroup', {title: 'Create Group'});
});

app.post('/createGroup/addGroup', function (req, res, next) {
    var newGroup = req.body;
    newGroup.uuid = uuidv1();
    newGroup.members = [];
    groups = require('./groups.json');
    groups.push(newGroup);
    fs.writeFile(
        __dirname + '/groups.json',
        JSON.stringify(groups, 2, 1),
        function (err) {
          if (!err) {
            res.status(200).send();
          } else {
            res.status(500).send("Failed to write data on server side.");
          }
        }
      );
  });
  
app.post('/createGroup/addGroup', function (req, res, next) {
    console.log(req.body);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
