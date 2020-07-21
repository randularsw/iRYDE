const router = require('express').Router();
let VehicleType=require('../models/vehicleType');
const vehicleType = require('../models/vehicleType');

router.route('/').get((req,res)=>{
    VehicleType.find()
    .then(vehicleTypes=> res.json(vehicleTypes))
    .catch(err => res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    const vehicleType = req.body.vehicleType;
    const newVehicleType = new VehicleType({vehicleType});

    newVehicleType.save()
    .then(()=>res.json('Vehicle type added!'))
    .catch(err=> res.status(400).json('Error:'+err));
});

router.route('/:id').get((req,res)=>{
    VehicleType.findById(req.params.id)
    .then(vehicleType=> res.json(vehicleType))
    .catch(err =>res.status(400).json('Error:'+err));
});

router.route('/:id').delete((req,res)=>{
    VehicleType.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Vehicle Type Deleted'))
    .catch(err =>res.status(400).json('Error:'+err));
});

module.exports = router;