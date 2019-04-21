//Dependencies - we use express to simplify server creation.
var express = require("express");
var $ = require("jquery");

//We need to configure express before we can use it.

//The following line of code tells node that we are creating an "express" server
var app = express();

//The next line of code sets an initial port.
var PORT = process.env.PORT || 8080;

//Now we set our express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This use state allows us to load files from our application folder
app.use(express.static(__dirname + "/app"));
console.log(__dirname + "/app");
//////////////////////////////////////////////////////////////
//Now we set up our Router
//The router is used to direct the serve to series of "route" files.
//The purpose of the routes is to provide a map to our server so the server can redirect a user when a new URL path is specified
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`Friends Finder App listening on: ${PORT}`);
});
