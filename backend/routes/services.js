const router = require("express").Router();
let Service = require("../models/services");

router.route("/add").post((req, res) => {
  const ownerId = req.body.ownerId;
  const servicename = req.body.servicename;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  const newService = new Service({
    servicename,
    description,
    imageUrl,
    ownerId,
  });
  console.log();
  newService
    .save()
    .then(() => res.json("Service added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").get((req, res) => {
  Service.find()
    .then((services) => res.json(services))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/sp/:id").get((req, res) => {
  //console.log(req.params.id);
  Service.find({ ownerId: req.params.id })
    .then((services) => res.json(services))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Service.findById(req.params.id)
    .then((services) => res.json(services))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Service.findByIdAndDelete(req.params.id)
    .then(() => res.json("Service deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
