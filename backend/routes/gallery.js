const router = require("express").Router();
const Gallery = require("../models/galley");

router.put("/:id", async (req, res) => {
  try {
    const received = await Gallery.findOne({ spId: req.params.id });
    if (received) {
      received.images.push({ original: req.body.url, thumbnail: req.body.url });
      const saved = await received.save();
      res.json(saved);
    } else {
      const newGallery = new Gallery({
        spId: req.params.id,
        images: [{ original: req.body.url, thumbnail: req.body.url }],
      });
      const saved = await newGallery.save();
      res.json(saved);
    }
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const received = await Gallery.findOne({ spId: req.params.id });
    res.json(received);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
