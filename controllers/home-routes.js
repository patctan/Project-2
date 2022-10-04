const router = require('express').Router();
const { User, Planner } = require('../models');
const withAuth = require('../utils/auth');

//still need to add middleware but for now leave as is for testing
router.get('/', async (req, res) => {
    try {
        const plannerData = await Planner.findAll();

        const itineraries = plannerData.map((plan) => plan.get({ plain: true }));

        res.render('homepage', { itineraries, logged_in: req.session.logged_in });
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


//adding withAuth middleware 

router.get('/homepage', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: Planner}],
        });
        const user = userData.get({plain: true});

        res.render('homepage', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;