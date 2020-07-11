const router = require('express').Router();
const Booking = require('../models/booking');

//add booking details
router.post('/', async (req,res) =>{
    const newBooking = new Booking({
        sp:req.body.sp,
        vo:req.body.vo,
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

module.exports = router;