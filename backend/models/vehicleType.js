const mongoose = require("mongoose");

const modelObj = new mongoose.Schema({
  model:{
    type:String
  },
  type:{
    type:String
  }
})

const vehicleTypeSchema = mongoose.Schema({  
  brand: {
    type: String,
    
  },
  models: {
    type: [modelObj],
   
  },
  
});

module.exports =mongoose.model('VehicleTypes',vehicleTypeSchema);
