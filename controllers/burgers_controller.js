// Requirements
//=======================
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
//=============================

// Routes
//=============================

// This route redirects the usert to the main page if they fail to type "/burgers" after the basic url
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// This route reads all of the burger information stored in the database
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// This route will add the user entry to the database and then reload the main page
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// This route updates the database
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

//=============================

//Exports
//=============================
module.exports = router;
