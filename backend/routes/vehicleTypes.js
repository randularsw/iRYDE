const router = require('express').Router();
const vehicleType = require('../models/vehicleType');

// add vehicle brand
router.post('/', async (req,res) =>{
    console.log(req.body);
    const newVehicleType = new vehicleType({
        brand:req.body.brand,
        
    })
    try {
        const saved = await newVehicleType.save();
        res.json(saved);    
    } catch (error) {
        res.json({ message: error });
    }
});

//add vehicle model
router.put('/add/:id', async (req,res) =>{
    console.log(req.body);
    
    try {
        const brand = await vehicleType.findById(req.params.id);
        console.log(brand);
        // const newVehicleType = new vehicleType({
    
        //     model:req.body.model,
        //     type:req.body.type, 
            
        // });
    
        brand.models.push(req.body);
        console.log(888,brand);
        saved = await brand.save();
        res.json(saved); 
    } catch (error) {
        res.json({ message: error });
    }
});

//get vehicle brand
router.route('/').get((req,res)=>{
    vehicleType.find()
    .then(vehicleTypes=> res.json(vehicleTypes))
    .catch(err => res.status(400).json('Error:'+err));

});

//get vehicle model & type
router.route('/model').get((req,res)=>{
    vehicleModel.find()
    .then(vehicleModels=> res.json(vehicleModels))
    .catch(err => res.status(400).json('Error:'+err));

});

// router.route('/:id').get((req,res)=>{
//     vehicleType.findById(req.params.id)
//     .then(vehicleType=> res.json(vehicleType))
//     .catch(err =>res.status(400).json('Error:'+err));
// });

//delete vehicle brand
router.route('/brand/:id').delete((req,res)=>{
    vehicleType.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Vehicle Brand Deleted'))
    .catch(err =>res.status(400).json('Error:'+err));
});

router.route('/model/:id').delete((req,res)=>{
    vehicleType.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Vehicle Model Deleted'))
    .catch(err =>res.status(400).json('Error:'+err));
});

module.exports = router;