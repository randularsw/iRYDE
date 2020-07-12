const router = require("express").Router();
let Promotion = require("../models/promotions");

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);

  const newPromotion = new Promotion({
    title,
    description,
    startDate,
    endDate,
  });
  console.log();
  newPromotion
    .save()
    .then(() => res.json("Promotion added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").get((req, res) => {
  Promotion.find()
    .then((promotions) => res.json(promotions))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
