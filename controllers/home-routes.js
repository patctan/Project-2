const router = require('express').Router();
const { User, Planner } = require('../models');
const withAuth = require('../utils/auth');

//still need to add middleware but for now leave as is for testing
router.get('/', async (req, res) => {
    try {
        const plannerData = await Planner.findAll();

        const plans = plannerData.map((plan) => plan.get({ plain: true }));

        res.render('homepage', { plans, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


    
    
module.exports = router;