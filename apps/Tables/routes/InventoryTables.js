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

// Routes for manipulating data in Mongo DB
const url = process.env.MONGO_DB_1_URL;

router.get('/get-data', function(req, res, next){
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('inventory').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('InventoryTable', {items: resultArray});
    });
  });
});
router.post('/insert', function(req, res, next){
    var item = {
        id: req.body.id,
        type: req.body.type,
        description: req.body.description,
        length: req.body.length,
        width: req.body.width,
        scrap: req.body.scrap,
        lastUpdate: req.body.lastUpdate,
        employee: req.body.employee
    };

    mongo.connect(url, function(err, db){
      assert.equal(null, err);
      db.collection('inventory').insertOne(item, function(err, result) {
        assert.equal(null, err);
        console.log('Item inserted');
        db.close();
      });
    });

    res.redirect('/InventoryTable');
});
//router.post('/update', function(req, res, next){

//});
//router.post('/delete', function(req, res, next){

//});


module.exports.routes = router;
