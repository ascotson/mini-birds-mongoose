var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var sightingCtrl = require('./controllers/sightingCtrl'); //instead of passing in the entire exports object from sightingCtrl wouldn't it be more efficient to just bring only the method that is needed?
                                                          //i.e. app.post would match directly to only sightingCtrl.create. This would hypothetical make the app architecture more efficient,
                                                          //streamlined, & increase performance. Architectural improvements to increase app performance.

var app = express();
app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost:27017/birds';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('Mongoose is connected');
});

app.post('/api/sighting', sightingCtrl.create);
app.get('/api/sighting/?', sightingCtrl.read);
app.put('/api/sighting/:id', sightingCtrl.update);
app.delete('/api/sighting/:id', sightingCtrl.delete);

var port = 3000;

app.listen(port, function(){
  console.log('Listening on Port ' + port);
});
