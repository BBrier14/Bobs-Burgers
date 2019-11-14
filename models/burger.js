// Requirements
//=============================
var orm = require("../config/orm.js");

// This variable is the primary "item" in this application
var burger = {
  
  // The all function will display every burger in the database and their values
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // The create function sets the name of the burger and the value of devoured to false when the user inputs a new burger
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },

  // Update will change the devoured value of the specified burger when the user clicks the button
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

//=============================

// Export burger
//=============================
module.exports = burger;
