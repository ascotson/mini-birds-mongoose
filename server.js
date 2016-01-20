var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var sightingCtrl = require('./controllers/sightingCtrl');

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
