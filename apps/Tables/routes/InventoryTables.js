const express = require('express');

const router = express.Router();

// declare route functions
let getInventoryTables;

// declare routes
router.get('/InventoryTables', (req, res) => getInventoryTables(req, res));

getInventoryTables = async (req, res) => {
  console.log(req.session);
  const { alert, user } = req.session;
  req.session.alert = null;
  res.render(
    'tables/pages/InventoryTable',
    {
      title: 'Acme',
      alert,
      //navBar,
      //footer,
      activePage: 'index',
      user
    }
  );
};

module.exports.routes = router;
