var express = require('express');
var router = express.Router();
var db = require('../dataLayer.js')
router.get('/test',function(req,res){
  res.end("HI THARE");
})

router.get('/categories',function(req,res){
  db.getCategories(function(err,data){
    res.type('application/json');
    res.end(JSON.stringify(data));
  })
})

router.get('/wikis',function(req,res){
  if (req.query.title){
    db.getWiki(req.query.title,function(err,data){
      res.type('application/json');
      res.end(JSON.stringify(data));
    })
  }
  else if (req.query.search){
    db.findWiki(req.query.search,function(err,data){
      res.type('application/json')
      res.end(JSON.stringify(data));
    })
  }
  else if (req.query.category){
    db.getWikisWithCategory(req.query.category,function(err,data){
      res.type('application/json');
      res.end(JSON.stringify(data));
    })
  }
  else {
    res.end("You must call with either a title, category or search  query. for example http://178.62.15.16/wikis?title=Abacus, http://178.62.15.16/wikis?search=turing, http://178.62.15.16/wikis?category=Turing tests")
  }
})
/*
// GET A User From The DataBase 
router.get('/user', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  user.find({}, function (err, users) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(users));
  });
});
*/
module.exports = router;
