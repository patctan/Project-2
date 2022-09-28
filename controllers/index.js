const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user');

router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;