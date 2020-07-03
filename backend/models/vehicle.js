const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vehicles", vehicleSchema);
