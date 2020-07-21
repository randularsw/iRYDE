const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const vehicleTypeSchema = new Schema({
  vehicleType:{
    type:String,
    // required:true

  }
});

const vehicleType=mongoose.model('VehicleTypes',vehicleTypeSchema);

module.exports =vehicleType;
