const router = require("express").Router();
const TimeSlot = require("../models/timeSlot");
//get specific sp time slots
router.get("/:id/:date", async (req, res) => {
  try {
    let received = await TimeSlot.find({
      sp: req.params.id,
      date: req.params.date,
    });
    if (received.length === 0) {
      const newTimeSlot = new TimeSlot({
        sp: req.params.id,
        date: req.params.date,
        timeSlots: [
          { time: "8.00 AM", filledSlots: 0 },
          { time: "10.00 AM", filledSlots: 0 },
          { time: "12.00 PM", filledSlots: 0 },
          { time: "2.00 PM", filledSlots: 0 },
          { time: "4.00 PM", filledSlots: 0 },
        ],
      });
      received = await newTimeSlot.save();
    }
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const res = await TimeSlot.findById(req.params.id);
    res.timeSlots = req.body.timeSlots;
    const saved = await TimeSlot.findByIdAndUpdate(req.params.id, res, { new: true });
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
