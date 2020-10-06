const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
  spId: {
    type: String,
    required: true,
  },
  images: {
    type: [{ original: String, thumbnail: String }],
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
