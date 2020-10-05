const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  rp: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model("Users", User);
