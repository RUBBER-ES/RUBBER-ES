var express = require('express');
var app = express();
var fsAPI = require('fs-rest-api');
var path = require('path');

// set the routing prefix and base directory
app.use('/fs', fsAPI(path.join(__dirname, '../FS')));
app.set('port', process.env.PORT || 3333);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});