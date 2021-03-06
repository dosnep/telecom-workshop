var express = require('express');
var twig = require('twig')
var bodyP = require('body-parser');
var cookieP = require('cookie-parser');
var session = require('express-session');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : ''
});

app.set('views', '.');
app.use(express.static('.'));
app.engine('html', twig.__express);
app.use(bodyP.urlencoded({ extended: false }));
app.use(session({ secret: '12345' }));



var serveur = app.listen(8080);

app.get('/', function(req, res) {
       
res.render('./index.html')  

});

app.get('/index', function(req, res) {
       
res.render('./index.html')  

});

app.get('/call', function(req, res) {
       
res.render('./call.html')  

});

app.get('/program', function(req, res) {
       
res.render('./program.html')  

});

app.get('/location', function(req, res) {
       
res.render('./location.html')  

});

app.get('/registration', function(req, res) {
       
res.render('./registration.html')  

});


app.post('/registration_approuved', function(req, res) {     
res.render('./registration_approuved.twig',{ 'firstname' : req.body.last , 'lastname' : req.body.first})  

});
