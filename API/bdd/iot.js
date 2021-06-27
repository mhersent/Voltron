var express = require('express');
var app = express.Router();

app.get('/iot', (req, res) => {
  res.send('iot');
});
