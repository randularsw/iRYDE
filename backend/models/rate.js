
const mongoose = require("mongoose");

const rateSchema = mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  review:{
    type: String,
    
  },
  voId: {
    type: String,
    required: true,
  },
  voName: {
    type: String,
    required: true,
  },
  spId:{
    type: String,
    required: true,
  },
  
  
  
});

module.exports = mongoose.model("Rating", rateSchema);
