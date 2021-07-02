var express = require('express');
var router = express.Router();

router.get('/web', (req, res) => {
  res.send('web');
});

router.get('/iot', (req, res) => {
  res.send('iot');
});

module.exports = router
