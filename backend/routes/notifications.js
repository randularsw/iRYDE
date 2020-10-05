const router = require('express').Router();
const Notification = require('../models/notification');

// router.post('/', async (req, res) => {
//     console.log(req.body);
//     const newNotification = new Notification({
//         title: req.body.title,
//     });
//     try {
//         const saved = await newNotification.save();
//         res.json(saved);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });

router.get('/', async (req, res) => {
    try {
        const saved = await Notification.find();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
