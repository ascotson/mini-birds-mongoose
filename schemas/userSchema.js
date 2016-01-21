var mongoose = require('mongoose');

var userSchema = mongoose.Schema({ //mongoose allows you not to have to put new in front of mongoose.Schema and it will still create the new object with the constructor function.
  email: {type: String, lowercase: true},
  username: {type: String, lowercase: true},
  level: {type: Number},
  location: {type: String},
  member: {type: Boolean}
});

userSchema.pre('save', function(next) {
  var user = this;
  user.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Users', userSchema);
