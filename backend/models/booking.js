const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  sp: {
    type: String,
    required: true,
  },
  spName:{
    type: String,
    required: true,
  },
  vo: {
    type: String,
    required: true,
  },
  voName:{
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  vehicle: {
    type: Array,
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
  status:{
    type:String,
    
  },
  isRated: {
    type: Boolean,
    required: true,
  },
  
});

module.exports = mongoose.model("Booking", bookingSchema);
