const superagent = require('superagent');

const express = require('express');

const router = express.Router();

// declare route functions
let getToolTable;

// declare routes
router.get('/ToolTable', (req, res) => getToolTable(req, res));

getToolTable = async (req, res) => {
  console.log("peinr aomwrhinf");
  const { alert, user } = req.session;
  req.session.alert = null;

  //const result = await superagent.get(`${process.env.API_URL}/tool/all`)
  const result = await superagent.get(`http://localhost:3000/tool/all`)
  .send({
    key: process.env.API_KEY
  });
  console.log(result.body);
  res.render(
    'Tables/pages/ToolTable',
    {
      title: 'Acme',
      tools: result.body
    }
  );
};

module.exports.routes = router;
