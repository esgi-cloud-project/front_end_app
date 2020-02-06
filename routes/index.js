var router = require('express').Router();

var homeRoutes = require('./home');

router.use(homeRoutes);

module.exports = router;