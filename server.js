var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = process.env.PORT || 3000;


app.listen(PORT, function(req, res) {
  console.log('Listening on PORT: ' + PORT);
});
