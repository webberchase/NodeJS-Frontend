const express = require('express');

const router = express.Router();

// Routes from other files Bringing in routes from files in routes folder
router.use('/', require('./InventoryTables').routes);
router.use('/', require('./JobTable').routes);
router.use('/', require('./ToolTable').routes);

module.exports.routes = router;
