const express = require('express');

const router = express.Router();

// Routes from other files Bringing in routes from files in routes folder
router.use('/', require('./dashboard').routes);

module.exports.routes = router;
