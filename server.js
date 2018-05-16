var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;

var cors = require('cors');
var app = express();
var db = require('./db');
var exhibitionsController=require('./controllers/exhibitions');
var exponatsController=require('./controllers/exponats');
var usersController=require('./controllers/users');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// app.use(methodOverride());
app.use(cors());

app.use(function(req,res,next){
	res.header("Acces-Control-Allow-Origin","*");
	res.header('Acces-Control-Allow-Origin','DELETE','PUT');
	res.header("Acces-Control-Allow-Origin","Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var exhibitions = [];
var exponats = [];
var users = [];

app.get('/',function(req,res){
    res.send('Hello API');
});

//gets id
app.get('/exhibitions/:id',exhibitionsController.findById);

app.get('/exponats/:id',exponatsController.findById);

app.get('/users/:id',usersController.findById);

// gets full db
app.get('/exhibitions',exhibitionsController.all);

app.get('/exponats', exponatsController.all);

app.get('/users',usersController.all);


//posts info to db
app.post('/exhibitions',exhibitionsController.create);

app.post('/exponats',exponatsController.create);

app.post('/users',usersController.create);

//updates info in id's
app.put('/exhibitions/:id',exhibitionsController.update);

app.put('/exponats/:id',exponatsController.update);

app.put('/users/:id',usersController.update);

//removing current info by id
app.delete('/exhibitions/:id',exhibitionsController.delete);

app.delete('/exponats/:id',exponatsController.delete);

app.delete('/users/:id',usersController.delete);

db.connect('mongodb://Artem:1234@ds219100.mlab.com:19100/museum-app',function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3012,function () {
    console.log('API app started');
})
});