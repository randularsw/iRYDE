const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    servicename: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    ownerId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
