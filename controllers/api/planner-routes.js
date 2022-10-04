const router = require('express').Router();
const {Project, Planner} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPlanner = await Planner.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPlanner);
    } catch (err) {
        res.status(400).json(err);
    }
});

