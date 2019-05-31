var express = require("express");
var app=express();
var path = require("path");
var bodyParser = require("body-parser");

var routes = require('./routes/people');


app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));

app.use('/',routes);
var people = require('./routes/people');

app.use('/people',people);
//Set Port
app.set('port',5555);
app.listen(app.get('port'),function(re){

  console.log('localhost hosted at:5555');

});
