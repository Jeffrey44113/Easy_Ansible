// Load the express module.
var express = require('express');
var app = express();

// respond to requests for / with 'hello world'
app.get('/', function(req, res){
    res.send('hello world!');
});

// listen port 80
app.listen(80);
console.log('server started succesfully');