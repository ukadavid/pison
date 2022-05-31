const express = require('express');
const app = express();

// All the folders
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});
app.get('/home', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/ourproduct', function(req, res){
    res.sendFile(__dirname + '/product.html');
});
app.get('/aboutus', function(req, res){
    res.sendFile(__dirname + '/about-us.html');
});
app.get('/contactus', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.listen(3001, function(){
    console.log("server is running")
})



