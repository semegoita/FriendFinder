var friends = require("../data/friends");
module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    // if (friends.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
  app.post("/api/clear", function() {
    friends = [];
    console.log(friends);
  });
};
