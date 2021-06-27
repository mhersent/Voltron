var express = require('express');
var app = express.Router();

app.get('/value', (req, res) => {
  res.send('value');
});
