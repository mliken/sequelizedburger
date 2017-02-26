var express = require("express");
var db = require("../models");
var router = express.Router();


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  // burger.all(function(burgerData) {
  db.burger.findAll().then(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

router.get("/favicon.ico", function(req, res){
  res.send(204);
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  // burger.create(req.body.burger_name, function(result) {
  db.burger.create({
    id: null,
    burger_name: req.body.burger_name,
    devoured: false
    });
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    res.redirect("/");
  });

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  // burger.update(req.body.burger_id, function(result) {
  db.burger.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  });
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    res.redirect("/");
  });

module.exports = router;
