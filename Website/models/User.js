const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//User Schema
const UserSchema = new Schema({
  deviceId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("User", UserSchema);
