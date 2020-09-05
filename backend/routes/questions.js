const router = require('express').Router();
const Question = require('../models/Question');

//add question details
router.post('/', async (req, res) => {
    console.log(req.body);
    const newQuestion = new Question({
        title: req.body.title,
        text: req.body.text,
        // ownerId: req.body.ownerId,
    })
    try {
        const saved = await newQuestion.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});
//gegt specific vehicle owner's vehicle
router.get('/vo/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const vehicles = await Vehicle.find({ ownerId: req.params.id });
        console.log(vehicles);
        res.json(vehicles)
    } catch (error) {
        res.json({ message: error });
    }
});

//get specific vehicle details
router.get('/:id', async (req, res) => {
    console.log('vvvvvvvvvvvvvvvvv', req.params.id);
    try {
        const vehicle = await Vehicle.findById({ _id: req.params.id });
        console.log(vehicle);
        res.json(vehicle)
    } catch (error) {
        res.json({ message: error });
    }
});

//delete specific vehicle
router.delete('/:id', async (req, res) => {
    console.log('vvvvvvvvvvvvvvvvv', req.params.id);
    try {
        const vehicle = await Vehicle.findByIdAndDelete({ _id: req.params.id });
        res.send('deleted');
    } catch (error) {
        res.json({ message: error });
    }
});


module.exports = router;