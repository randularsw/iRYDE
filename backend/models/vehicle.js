const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const vehicleSchema = new Schema({
    brand:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    vehicleNo:{
        type:String,
        required:true,
    },
    ownerId:{
        type:String,
        required:true,
    }
});

const Vehicle = mongoose.model('Vehicle',vehicleSchema);

module.exports = Vehicle;