const router =require('express').Router();
let Remove=require('../models/removeUser');

router.route('/').get((req,res)=>{
    Remove.find()
    .then(Remove=> res.json(Remove))
    .catch(err => res.status(400).json('Error:'+err));

});

router.route('/:id').delete((req,res)=>{
    VehicleType.findByIdAndDelete(req.params.id)
    .then(()=> res.json('User Deleted'))
    .catch(err =>res.status(400).json('Error:'+err));
});


module.exports = router;