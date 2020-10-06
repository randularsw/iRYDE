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
    status: req.body.status,
    isRated: req.body.isRated,
  });
  try {
    const saved = await newBooking.save();
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific sp incoming appointments
router.get("/sp/incoming/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      sp: req.params.id,
      status: "pending",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific sp confirmed appointments
router.get("/sp/confirmed/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      sp: req.params.id,
      status: "confirmed",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific sp finished appointments
router.get("/sp/finished/:id", async (req, res) => {
  try {
    console.log(88888888888888888888, req.params);
    const received = await Booking.find({
      sp: req.params.id,
      status: "finished",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific vo incoming appointments
router.get("/vo/incoming/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      vo: req.params.id,
      status: "pending",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific vo confirmed appointments
router.get("/vo/confirmed/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      vo: req.params.id,
      status: "confirmed",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific vo finished appointments
router.get("/vo/finished/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      vo: req.params.id,
      status: "finished",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//specific vo canceled appointments
router.get("/vo/canceled/:id", async (req, res) => {
  try {
    const received = await Booking.find({
      vo: req.params.id,
      status: "canceled",
    });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
//status- pendind,confirmed,canceled,finished
//update status
router.patch("/status/:id", async (req, res) => {
  try {
    console.log(req.body);
    const patchStatus = await Booking.updateOne(
      { _id: req.params.id },
      { $set: { status: req.body.status } }
    );
    res.json(patchStatus);
  } catch (error) {
    res.json({ message: error });
  }
});

//checking isRated
router.get("/isRated/:id", async (req, res) => {
  try {
    const result = await Booking.find({
      vo: req.params.id,
      status: "finished",
      isRated: false,
    });
    res.json(result);
  } catch (error) {
    res.json({ message: error });
  }
});

//get all bookings
router.get("/all-bookings",async(req,res)=>{
  try {
    const result = await Booking.find();
    res.json(result);
  } catch (error) {
    res.json({ message: error });
  }
})

module.exports = router;
