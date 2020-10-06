var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.send({ data: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      type: req.body.type,
      rp: 0,
      level: "Beginner",
      password: hash,
    });
    console.log(user);

    const saved = await user.save();
    console.log(saved);
    const tokenSecret = "gj56ubrtb2yesyv63jhn6rt3j";
    const token = jwt.sign({ _id: user._id }, tokenSecret);

    res
      .header("token", token)
      .header("access-control-expose-headers", "token")
      .send(saved);
  } catch (error) {
    res.send({ data: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send({ data: "Email doesn't exist" });

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.send({ data: "Invalid password" });

    const tokenSecret = "gj56ubrtb2yesyv63jhn6rt3j";
    const token = jwt.sign({ _id: user._id }, tokenSecret);

    res
      .header("token", token)
      .header("access-control-expose-headers", "token")
      .send(user);
  } catch (error) {
    res.send({ data: error });
  }
});

router.get("/sp", async (req, res) => {
  try {
    const sps = await User.find({ type: "sp" });
    // delete passwords
    res.send(sps);
  } catch (error) {
    res.send({ data: error });
  }
});

router.get("/vo", async (req, res) => {
  try {
    const sps = await User.find({ type: "vo" });
    // delete passwords
    res.send(sps);
  } catch (error) {
    res.send({ data: error });
  }
});

router.put("/", async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findById(req.body._id);

    user.name = req.body.name;
    user.phone = req.body.phone;
    user.city = req.body.city;

    const saved = await user.save();

    res.send(saved);
  } catch (error) {
    res.send({ data: error });
  }
});

// upload profile photo
router.put("/photo", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req.body._id);
    console.log(user);
    user.photo = req.body.photo;

    const saved = await user.save();
    console.log(saved);

    res.send(saved);
  } catch (error) {
    res.send({ data: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // delete user.password;
    res.send(user);
  } catch (error) {
    res.send({ data: error });
  }
});

router.get("/all-users", async (req, res) => {
  try {
    const user = await User.find({});
    // delete user.password;
    res.send(user);
  } catch (error) {
    res.send({ data: error });
  }
});

module.exports = router;
