var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var CommentSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String
  },
  // `link` is required and of type String
  body: {
    type: String,
    required: true
  }
  // `comment` is an object that stores a comment id
  // The ref property links the ObjectId to the comment model
  // This allows us to populate the Article with an associated comment
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model('Comment', CommentSchema);

// Export the Article model
module.exports = Comment;
