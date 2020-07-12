const mongoose = require("mongoose");

const vTypeSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VehicleTypes", vTypeSchema);
