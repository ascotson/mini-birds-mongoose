var Sighting = require('./../models/sightingModel'); //now Sighting is the name of the Model previously referenced as sighting Model. Assigned to the var Sighting to easily use it in this controller vs typing out the require every single time.

module.exports = {
  create: function(req, res) {
    var newSighting = new Sighting(req.body);  //invoking the Sighting constructor method on the Sighting Model and passing in req.body as a parameter, and assigning the returned object to the var newSighting.
    newSighting.save(req.body, function(err, result) {  //.save is a method (with a ton of others) on the new object created by the Sighting constructor method. It takes in req.body and the anonymous function as parameters.
      if(err) {  //when we say new Sighting it is only referencing the constructor method on the Sighting Model - there are a ton of properties on the Model. We dont have to type 'new Sighting.methodnamme(req.body) because mongoose intelligently eliminates the need for that with the code built into Model.'
        res.status(500).send('Failed to add new record'); //IT IS ESSENTIAL TO COMPLETELY UNDERSTAND THE CODE BEHIND FRAMEWORKS & LIBRARIES LIKE MONGOOSE & EXPRESS SO YOU CAN AVOID SCOPE ISSUES (& JUST SIMPLY UNDERSTAND WHAT'S GOING ON & THE BENEFIT/EASE THE FW/LIB IS PROVIDING YOU).
        console.log(err, 'POST request failed');
      }
      else {
        res.send(result);
        console.log('POST success');
      }
    });
  },

  read: function(req, res) {
    Sighting.find({}, function(err, result) { //.find is another method on the new object created by the Sighting constructor method on the Model object named Sighting).
      if(err) {
        res.status(500).send('Failed to get requested record');
        console.log(err, 'GET request failed');
      }
      else {
        res.send(result);
        console.log('POST success');
      }
    });
  },

  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if(err) {
        res.status(500).send('Failed to update requested record');
        console.log(err, 'PUT request failed');
      }
      else {
        res.send(result);
        console.log('POST success');
      }
    });
  },

  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send('Failed to delete requested record');
        console.log(err, 'DELETE request failed');
      }
      else {
        res.send(result);
        console.log('POST success');
      }
    });
  }
};
