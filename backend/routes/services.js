const router = require("express").Router();
let Service = require("../models/services");

router.route("/add").post((req, res) => {
  const servicename = req.body.servicename;
  const description = req.body.description;

  const newServices = new Service({
    servicename,
    description,
  });

  newServices
    .save()
    .then(() => res.json("Service added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").get((req, res) => {
  Service.find()
    .then((services) => res.json(services))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
