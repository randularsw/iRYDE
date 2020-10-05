const router = require('express').Router();
const Vehicle = require('../models/vehicle');

//add vehicle details
router.post('/', async (req,res) =>{
    console.log(req.body);
    const newVehicle = new Vehicle({
        brand:req.body.brand,
        model:req.body.model,
        type:req.body.type,
        vehicleNo:req.body.vehicleNo,
        ownerId:req.body.ownerId,
    })
    try {
        const saved = await newVehicle.save();
        res.json(saved);    
    } catch (error) {
        res.json({ message: error });
    }
});
//get specific vehicle owner's vehicles
router.get('/vo/:id',async (req,res)=>{
    console.log(req.params.id);
    try {
        const vehicles = await Vehicle.find({ownerId : req.params.id});
        console.log(vehicles);
        res.json(vehicles)
    } catch (error) {
        res.json({ message: error });
    }
});

//get specific vehicle details
router.get('/:id',async (req,res)=>{
    console.log('vvvvvvvvvvvvvvvvv',req.params.id);
    try {
        const vehicle = await Vehicle.findById({ _id: req.params.id });
        console.log(vehicle);
        res.json(vehicle)
    } catch (error) {
        res.json({ message: error });
    }
});

//delete specific vehicle
router.delete('/:id',async (req,res)=>{
    console.log('vvvvvvvvvvvvvvvvv',req.params.id);
    try {
        const vehicle = await Vehicle.findByIdAndDelete({ _id: req.params.id });
        res.send('deleted');
    } catch (error) {
        res.json({ message: error });
    }
});


module.exports = router;