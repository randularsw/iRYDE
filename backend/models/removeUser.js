const mongoose = require("mongoose");

const RemoveUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  
  type:{
    type: String,
    required: true,
  },
  
  
});

module.exports = mongoose.model("RemoveUsers",RemoveUserSchema);
