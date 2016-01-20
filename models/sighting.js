var mongoose = require('mongoose');

var SightingModel = mongoose.Schema({
  name: {type: 'String', lowercase: true}, //make all names lowercase
  order: {type: 'String', maxlength: 20}, //restrict length to 20
  numberSeen: {type: 'Number', min: 1}, //ensure numberSeen is greater than 0.
  status: {
    type: 'String',
    lowercase: true, //enumerate possible values for status & make them lowercase.
    enum: [
      'extinct',
      'extinct in the wild',
      'endangered',
      'least concern'
    ]
  },
  confirmed: {type: Boolean, default: false}
});

SightingModel.pre('save', function(next) {
  var sighting = this;
  sighting.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Sighting', SightingModel);
