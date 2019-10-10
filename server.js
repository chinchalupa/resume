var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/resume.html'));
});

app.listen(80);
