var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var routes = require('./api/routes');

app.use('/', routes);

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
