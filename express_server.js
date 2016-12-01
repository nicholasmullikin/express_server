var express = require('express');
var fs = require('fs');

var app = express(); //create an express app
app.set ('views', __dirname + '/views'); //specify the views directory
app.set ('view engine', 'ejs'); //set the view engine
app.use(express.static(__dirname + '/public')); //set the public folder

app.get('/', function(req, res){
   
  fs.readFile("views/index.ejs", 'utf8', function (err, contents) {

     if (err) {
        res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/sprint2.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

        res.render("index.ejs", {data: json_data_object});
     }
  });
  
}); // respond to requests for the default route

app.listen(8000);