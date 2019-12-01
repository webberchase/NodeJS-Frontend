const express = require('express');

const router = express.Router();

// declare route functions
let getToolTable;

// declare routes
router.get('/ToolTable', (req, res) => getToolTable(req, res));

getToolTable = async (req, res) => {
  console.log(req.session);
  const { alert, user } = req.session;
  req.session.alert = null;
  res.render(
    'Tables/pages/ToolTable',
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
