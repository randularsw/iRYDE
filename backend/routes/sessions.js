const router = require('express').Router();
const Notification = require('../models/notification');
const Session = require('../models/session');
const User = require('../models/User');

// request
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newSession = new Session({
            requesterId: req.body.requesterId,
            providerId: req.body.providerId,
        })
        const saved = await newSession.save();

        const user = await User.findById(req.body.requesterId);

        const newNotification = new Notification({
            title: `${user.name} is asking for your help. \nClick here to help.`,
            type: "session",
            forId: saved._id,
            createdAt: Date.now()
        });
        newNotification.save();

        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        console.log(req.params);
        if (!session.providerId) {
            session.providerId = req.body.providerId;
        }
        const saved = await session.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const saved = await Session.findById(req.params.id);
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Session.findByIdAndDelete(req.params.id);
        res.json(deleted);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;