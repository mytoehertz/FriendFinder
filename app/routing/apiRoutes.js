//Let us load the data by linking our routes to a series of "data" sources
//The line below uses the data source path/friends to extract the data from the js file
var friends = require("../data/friends");

//Routing for the api routes

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let totalDifference = 100;
    let currentDifference = 0;
    let bestMatch;

    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < 10; j++) {
        currentDifference += Math.abs(req.body.scores[j] - friends[i].scores[j]);
      }
      console.log(i + " " + currentDifference);
      if (currentDifference < totalDifference) {
        totalDifference = currentDifference;
        bestMatch = friends[i];
      }
      currentDifference = 0;
    }
    friends.push(req.body);
    res.json(bestMatch);
  });
};
