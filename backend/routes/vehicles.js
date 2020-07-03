const router = require('express').Router();
const Vehicle = require('../models/vehicle');

router.post('/', async (req,res) =>{
    console.log(req.body);
    const newVehicle = new Vehicle({
        brand:req.body.brand,
        model:req.body.model,
        type:req.body.type,
        vehicleNo:req.body.vehicleNo,
        ownerId:req.body.vehicleNo,
    })
    try {
        const saved = await newVehicle.save();
        res.json('vehicle added successfully');    
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;