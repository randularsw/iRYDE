const router = require('express').Router();
const Question = require('../models/Question');

//add question details
router.post('/', async (req, res) => {
    console.log(req.body);
    const newQuestion = new Question({
        title: req.body.title,
        text: req.body.text,
        userHandle: req.body.userHandle,
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
    // console.log('vvvvvvvvvvvvvvvvv', req.params.id);
    try {
        const question = await Question.findById({ _id: req.params.id });
        console.log(question);
        if (question._id) {
            res.json(question)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Message not found!' });
    }
});

//get all question details
router.get('/', async (req, res) => {
    var mysort = { createdAt: -1 };
    // console.log('vvvvvvvvvvvvvvvvv',req.body);
    try {
        const question = await Question.find().sort(mysort);
        console.log(question);
        res.json(question)
    } catch (error) {
        res.json({ message: error });
    }
});

//update an question
router.put("/:id", async (req, res) => {
    try {
        const updateQuestion = await Question.findById({ _id: req.params.id });
        console.log(req.params);
        if (updateQuestion._id) {
            updateQuestion.title = req.body.title;
            updateQuestion.text = req.body.text;
        }
        const saved = await updateQuestion.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

//Delete question
router.delete('/:id', async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete({ _id: req.params.id });
        res.json(deleted);
    } catch (error) {
        res.json({ message: error });
    }
});

//Like a question
router.put('/:id/like', async (req, res) => {
    // const userHandle = req.body.userHandle;
    const question = await Question.updateOne({ _id: req.params.id });
    console.log(req.params);
    if (question._id) {
        question.likeCount = question.likeCount + 1;
        // question.likes.push({ userHandle: userHandle });
        const likedQuestion = await question.save();
        res.json(likedQuestion);
    } else {
        res.status(500).json({ error: 'Message not found!' });
    }
})



module.exports = router;