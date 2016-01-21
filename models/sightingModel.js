var mongoose = require('mongoose');
var birdSchema = require('./../schemas/birdSchema');
var userSchema = require('./../schemas/userSchema');

var Schema = mongoose.Schema;

var sightingSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'user'}, //utilizing a 'referential' relationship that permits all historical and new data to be referenced to the user regardless of if the user object is altered or updated. i.e.  if a user was to update their email address all previous sighting data will now refer to the updated user object that includes the new address.
  bird: [birdSchema], //Using an 'embedded' relationship to store bird data for a given sighting embeds all historical data into this current data request. i.e. all data from previous sightings is included in this new sighting which allows for comparison purposes.
  //nesting the birdSchema inside the new sightingSchema & ensuring that all bird data on this new Schema is in conformity with the currently existing birdSchema. This ensures uniformity in how all bird data is stored in the database by passing ALL bird data through the birdSchema. We would instantiate birdSchema in ALL Models working with bird data.
  confirmed: {type: Boolean, default: false,
  numberSeen: {type: 'Number', min: 1}, //ensure numberSeen is greater than 0.
  },
});

sightingSchema.pre('save', function(next) {
  var sighting = this;
  sighting.updatedAt = new Date(); //creates a date & time log of when data is updated or created through the sightingSchema. Allows you to track data manipulations for sightings.
  next();
});
//this right here makes the sightingSchema a model & assigns to it all the powers, privileges, & rights of the model.
module.exports = mongoose.model('Sightings', sightingSchema); //in the background mongoose is making the 'Sighting' collection (or updating its schema if it exists) and assigning the sightingSchema to that collection.
//here we are defining the collection name & schema to the model. We will assign that model to a variable when it is 'required' later on.
//mongoose automatically assigns the connection by referencing any currently open mongoose connection (usually referenced in your server.js file).
//A model is created by combining a Schema, a Connection, & a collection name.
//A Schema is an object.
//A Model is an object.
//A Connection is a fairly standard wrapper around a database connection.
//.model has a WHOLE ton of krap associated with it that creates or updates the Sighting collection and applies the sightingSchema Schema to that collection.

//ONE MODEL ONE SCHEMA (MANDATORY)
//ONE SCHEMA ONE FILE (OPTIONAL BUT HIGHLY RECOMMENDED BY VALERI KARPOV)

//.exports is an array of objects. Each time something is assigned to it it has the inbuilt functionality to add that to itself vs. overwriting the existing objects.
//the name of that object is the collection name, i.e. 'Sighting' that we give it in the first parameter.
//when we assign a schema to .exports then it is a constructor method on the .exports object (which is an array of objects).
