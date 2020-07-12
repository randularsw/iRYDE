const router = require('express').Router();
const Vtype = require('../models/vehicleType');


router.post((req, res) => {
    const itemName = req.body.itemName;

    const newVtype = new Vtype({
      itemName,
    });
    console.log();
    newVtype
      .save()
      .then(() => res.json("vehicle brand added"))
      .catch((err) => res.status(400).json("Error:" + err));
  });



router.get('/:id',async (req,res)=>{
    console.log('vehicle type',req.params.id);
    try {
        const vehicleType = await Vtype.findById({ _id: req.params.id });
        console.log(vehicleType);
        res.json(vehicleType)
    } catch (error) {
        res.json({ message: error });
    }
});


router.delete('/:id',async (req,res)=>{
    console.log('vehicle type',req.params.id);
    try {
        const vehicleType = await Vtype.findByIdAndDelete({ _id: req.params.id });
        console.log(vehicleType);
        res.send('vehicle brand deleted');
    } catch (error) {
        res.json({ message: error });
    }
});


module.exports = router;