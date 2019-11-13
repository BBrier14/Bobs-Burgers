// Requirements and their boilplate code
//===========================================
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Static Content server
app.use(express.static("public"));

// Parse content as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes that server has access too
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
//===========================================

// Listener
//===========================================
app.listen(PORT, function() {
  console.log("Server Listening on: http://localhost:" + PORT);
});
