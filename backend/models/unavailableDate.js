const mongoose = require("mongoose");

const dateList = new mongoose.Schema({
  date: { type: Date },
});

const unavailableDateSchema = mongoose.Schema({
  spId: {
    type: String,
  },
  dates: {
    type: [dateList],
  },
});

module.exports = mongoose.model("UnavailableDates", unavailableDateSchema);
