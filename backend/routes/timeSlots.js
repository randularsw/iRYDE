const router = require('express').Router();
const TimeSlot = require('../models/timeSlot');

router.get('/:id/:date',async (req,res)=>{
    console.log(req.params.date);
    try {
        let received = await TimeSlot.find({sp: req.params.id ,date:req.params.date});
        if(received.length === 0){
            const newTimeSlot = new TimeSlot({
                sp: req.params.id,
                date:req.params.date,
                timeSlots:[
                    {time: '8.00 AM', filledSlots:0},
                    {time: '10.00 AM', filledSlots:0},
                    {time: '12.00 PM', filledSlots:0},
                    {time: '2.00 PM', filledSlots:0},
                    {time: '4.00 PM', filledSlots:0},
                ],
            });
 
            received = await newTimeSlot.save();
            //console.log(res);

        }else{
            console.log(444444444444,received[0]);
        }
        console.log(received);
        res.json(received);

    } catch (error) {
        res.json({ message: error });
    }
});



module.exports = router;