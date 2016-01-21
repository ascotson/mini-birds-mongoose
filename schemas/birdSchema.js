var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var birdSchema = new Schema({ //mongoose has code written that if 'Schema' is declared it automatically invokes the constructor method and saves us from typing mongoose.method.[index # or method name if applicable]. It's intelligent.
  name: {type: 'String', lowercase: true}, //it passes in all other properties on the Schema object but only utilizes the constructor method in this code. The entire object and all properties are passed to the var BirdSchema however.
  order: {type: 'String', lowercase: true},
  status: {
    type: 'String',
    lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'endangered',
      'least concern'
    ]
  },
});

module.exports = birdSchema;
