const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Post Schema
const PostSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
