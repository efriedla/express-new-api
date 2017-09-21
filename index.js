/*
https://www.youtube.com/watch?v=mj8_w11MvH8

http://api.giphy.com/v1/gifs/search?api_key=7abzb9jlkpwUMXLBl1ElXShFxhu3EMtd&q=rainbow
HOST = URL
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=7abzb9jlkpwUMXLBl1ElXShFxhu3EMtd"
var query = "&q=rainbow";
host
path

url
endpoint
&api_key=

key
YOUR_API_KEY


q=rainbow

parameters
function setup() {
	noCavas();
	var url = api + apiKey + query;
	loadJson(url, gotData);
}
function gotData(giphy){
	for (var i =0; i < giphy.data.length; i++){
	createImg(giphy.data[i].images.preview.mp4);
	}
}
*/
var express = require('express');
var request = require('request');
var http = require('http');
var app = express();
app.use(express.static(__dirname + '/static'));
// app.use(express.views(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.sendFile("./index.html");
});
var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-type": "text/plain"});
	res.end("welcome to my first node.js server...");	
});
server.listen(1234, function(){
	console.log("server started");
});

app.get('/search/:foo', function(req, res) {
  var url = "http://api.giphy.com/v1/gifs/search?";
  var apiKey = "api_key=7abzb9jlkpwUMXLBl1ElXShFxhu3EMtd"
var query = "&q=rainbow";
  //var q = req.params.foo;
  //var fullUrl = url + 'q=' + q;
  function setup() {
	noCavas();
	var url = api + apiKey + query;
	loadJson(url, gotData);
}
function gotData(giphy){
	for (var i =0; i < giphy.data.length; i++){
	createImg(giphy.data[i].images.preview.mp4);
	}
}
  request({
    url: fullUrl
  }, function(error, response, body) {
    var dataObj = JSON.parse(body);
   
    // res.render('index', {data: dataObj});
    res.send(dataObj);
    console.log(body);

  });
});

app.listen(3000);