var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('greetUser', {title: 'Sign in'});
});

app.get('/myGroups', function (req, res) {
    res.render('myGroups', {title: 'My Groups'});
});

app.get('/createGroup', function (req, res) {
    res.render('createGroup', {title: 'Create Group'});
});

app.post('/createGroup/addGroup', function (req, res, next) {
    var person = req.body;
    console.log(person);
    res.status(200).send();
  });
  
app.post('/createGroup/addGroup', function (req, res, next) {
    console.log(req.body);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
