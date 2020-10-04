const router = require('express').Router();
const Question = require('../models/Question');

//add question details
router.post('/', async (req, res) => {
    console.log(req.body);
    const newQuestion = new Question({
        title: req.body.title,
        text: req.body.text,
        // ownerId: req.body.ownerId,
    });
    try {
        const saved = await newQuestion.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

//get specific question details
router.get('/:id', async (req, res) => {
    console.log('vvvvvvvvvvvvvvvvv', req.params.id);
    try {
        const question = await Question.findById({ _id: req.params.id });
        console.log(question);
        res.json(question)
    } catch (error) {
        res.json({ message: error });
    }
});

//get specific question details
router.get('/', async (req, res) => {
    // console.log('vvvvvvvvvvvvvvvvv',req.body);
    try {
        const question = await Question.find();
        console.log(question);
        res.json(question)
    } catch (error) {
        res.json({ message: error });
    }
});



module.exports = router;