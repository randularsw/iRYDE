const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  sp: {
    type: String,
    required: true,
  },
  vo: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  isAccepted: {
    type: Boolean,
    required: true,
  },
  isRated: {
    type: Boolean,
    required: true,
  },
  isFinished: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
