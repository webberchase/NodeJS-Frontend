const express = require('express');
// const { navBar } = require('./navigationBars/main');
// const { footer } = require('./footers/main');

const router = express.Router();

// Routes from other files Bringing in routes from 'apps'.
router.use('/', require('../../apps/_/apps').router);

module.exports.router = router;