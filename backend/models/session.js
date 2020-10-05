const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  requesterId: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
  },
});

module.exports = mongoose.model("Sessions", sessionSchema);
