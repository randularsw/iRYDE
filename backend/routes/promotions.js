const router = require("express").Router();
let Promotion = require("../models/promotions");

router.route("/add").post((req, res) => {
  const ownerId = req.body.ownerId;
  const title = req.body.title;
  const description = req.body.description;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);

  const newPromotion = new Promotion({
    ownerId,
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

router.route("/sp/:id").get((req, res) => {
  console.log(req.params.id);
  Promotion.find({ ownerId: req.params.id })
    .then((promotions) => res.json(promotions))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Promotion.findById(req.params.id)
    .then((promotions) => res.json(promotions))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Promotion.findById(req.params.id)
    .then((promotion) => {
      promotion.title = req.body.title;
      promotion.description = req.body.description;
      promotion.startDate = Date.parse(req.body.startDate);
      promotion.endDate = Date.parse(req.body.endDate);

      promotion
        .save()
        .then(() => res.json("Promotion updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Promotion.findByIdAndDelete(req.params.id)
    .then(() => res.json("Promotion deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
