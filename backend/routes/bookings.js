const router = require("express").Router();
const Booking = require("../models/booking");

//add booking details
router.post("/", async (req, res) => {
  const newBooking = new Booking({
    sp: req.body.sp,
    spName: req.body.spName,
    vo: req.body.vo,
    voName: req.body.voName,
    services: req.body.bookingServices,
    vehicle: req.body.vehicle,
    date: req.body.date,
    time: req.body.time,
    status:req.body.status,
    isRated: req.body.isRated,
    
  });
  try {
    const saved = await newBooking.save();
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
});
//status- pendind,confirm,cancel,finished
//specific sp incoming appointments
router.get("/incoming/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      sp: req.params.id,
      status:'pending',
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("incoming/confirm/:id", async (req,res)=>{
try {
    const patchStatus = await Booking.updateOne(
        {_id:req.params.id},
        {$set:{status:'confirm'}}
    )
    res.json(patchStatus);
} catch (error) {
    res.json({ message: error });
}
})

module.exports = router;
