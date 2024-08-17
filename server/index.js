var express = require('express');
var app = express();
var fsAPI = require('fs-rest-api');
var path = require('path');
var imageDataURI = require('image-data-uri');
var fs = require('node:fs')

// set the routing prefix and base directory
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Requested-With');
  next();
});
app.use('/fs', fsAPI(path.join(__dirname, '../FS')));
app.set('port', process.env.PORT || 3333);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});


function readImage(req, res) {
  console.log('readImage: '+req.query.path);
  imageDataURI.encodeFromFile('../FS/' + req.query.path).then(data =>
    res.send({
      contents: data
    }))
    .catch((err) => console.dir(err));
};

function getScaffolding(req, res) {
  fs.readFile('../FS/scaffolding-with-music.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
}
app.get('/read-image', readImage);
app.get('/scaffolding', getScaffolding)


