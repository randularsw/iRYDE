const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  forId: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Notifications", notificationSchema);
