const router = require("express").Router();
const Rating = require("../models/rate");

//add rate to db
router.post("/", async(req,res)=>{
    try {
        const newRate = new Rating({
            rate:req.body.rate,
            review:req.body.review,
            voId:req.body.voId,
            voName:req.body.voName,
            spId:req.body.spId,

        });
        console.log(newRate);
        const saved = await newRate.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});
//get specific sp rates
router.get("/:id", async(req,res)=>{
    try {
        const received = await Rating.find({spId:req.params.id});
        console.log(received);
        res.json(received);
    } catch (error) {
        res.json({ message: error });
    }
})

module.exports = router;