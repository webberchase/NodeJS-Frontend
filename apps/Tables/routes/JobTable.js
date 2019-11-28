const express = require('express');

const router = express.Router();

// declare route functions
let getJobTable;

// declare routes
router.get('/JobTable', (req, res) => getJobTable(req, res));

getJobTable = async (req, res) => {
  console.log(req.session);
  const { alert, user } = req.session;
  req.session.alert = null;
  res.render(
    'Tables/pages/JobTables',
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
