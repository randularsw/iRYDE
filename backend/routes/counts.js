const router = require('express').Router();
const count = require('../models/count');

// //get vo count
// router.route('/vo').get((req,res)=>{
//     count.find()
//     .then(count=> res.json(count))
//     .catch(err => res.status(400).json('Error:'+err));

// });

// //get sp count
// router.route('/sp').get((req,res)=>{
//     count.find()
//     .then(count=> res.json(count))
//     .catch(err => res.status(400).json('Error:'+err));

// });

// //get total bookings
// router.route('/bookings').get((req,res)=>{
//     count.find()
//     .then(count=> res.json(count))
//     .catch(err => res.status(400).json('Error:'+err));

// });

//get sp count
router.get("/", async (req, res) => {
    try {
      //console.log("4566");
      const sp = await User.find({spName:""});
      //const vo = await User.find({type:'vo'});
      
      //console.log(users);
      
      res.send({ spbookings:spName.length });
    } catch (error) {
      res.send({ data: error });
    }
  });


module.exports = router;