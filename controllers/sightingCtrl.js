var Sighting = require('./../models/sighting');

module.exports = {
  create: function(req, res) {
    Sighting.create(req.body, function(err, result) {
      if(err) {
        res.status(500).send('Failed to add new record');
        console.log('POST request failed');
      }
      res.send(result);
      console.log('POST success');
    });
  },

  read: function(req, res) {
    Sighting.find({}, function(err, result) {
      if(err) {
        res.status(500).send('Failed to get requested record');
        console.log('GET request failed');
      }
      res.send(result);
      console.log('GET success');
    });
  },

  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if(err) {
        res.status(500).send('Failed to update requested record');
        console.log('PUT request failed');
      }
      res.send(result);
      console.log('PUT success');
    });
  },

  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send('Failed to delete requested record');
        console.log('DELETE request failed');
      }
      res.send(result);
      console.log('DELETE success');
    });
  }
};
