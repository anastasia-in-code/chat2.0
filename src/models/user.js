const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  color: {
    type: String,
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
