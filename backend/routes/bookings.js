const router = require('express').Router();
const Booking = require('../models/booking');

//add booking details
router.post('/', async (req,res) =>{
    const newBooking = new Booking({
        sp:req.body.sp,
        spName:req.body.spName,
        vo:req.body.vo,
        voName:req.body.voName,
        services:req.body.bookingServices,
        vehicle: req.body.vehicle,
        date:req.body.date,
        time:req.body.time,
        isAccepted:req.body.isAccepted,
        isRated:req.body.isRated,
        isFinished:req.body.isFinished,
    })
    try {
        const saved = await newBooking.save();
        res.json(saved);    
    } catch (error) {
        res.json({ message: error });
    }
});

//specific sp incoming appointments
router.get('/incoming/:id', async (req,res)=>{
    console.log(req.params.id);
    try {
        const received = await Booking.find({ sp : req.params.id , isAccepted : false});
        res.json(received);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;