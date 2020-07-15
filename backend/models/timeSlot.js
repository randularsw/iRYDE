const mongoose = require("mongoose");

const timeSlot = new mongoose.Schema({
  time:{type:String},
  fulledSlots:{type:Number},
})

const timeSlotSchema = mongoose.Schema({
  sp: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlots:{
      type:[timeSlot],
  }
  
});

module.exports = mongoose.model("TimeSlot", timeSlotSchema);
