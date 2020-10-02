const router = require("express").Router();
const unavailableDate = require("../models/unavailableDate");
const UnavailableDate = require("../models/unavailableDate");

router.get('/:id',async (req,res)=>{
  try {
    const received = await UnavailableDate.find({ spId: req.params.id });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
})

router.put("/:id", async (req, res) => {
  let saved;
  try {
    let received = await UnavailableDate.findOne({ spId: req.params.id });
    if (received == null) {
      const newDate = new UnavailableDate({
        spId: req.params.id,
        dates: [{ date: req.body.date }],
      });
      saved = await newDate.save();
    } else {
      let dateObj = {
        date: req.body.date,
      };
      received.dates.push(dateObj);
      saved = await received.save();
    }
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
