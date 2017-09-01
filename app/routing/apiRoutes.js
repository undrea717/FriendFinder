
var friends = require('../data/friends.js');



module.exports = function(app) {

	 app.get("/api/friends", function(req, res) {
    res.json(friends);
  	});


	 app.post("/api/friends", function(req, res) {

	 	var matchSeeker = req.body;
	 	var finderScore = matchSeeker.scores;
		console.log("api: " + matchSeeker);


		var scoreArray = []
		var bestMatch = 0

		for (var i = 0; i < friends.length; i++) {
			var scoreCheck = 0;

			for (var j = 0; j < finderScore.length; j++) {
				scoreCheck += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(finderScore[j])));
			}

			scoreArray.push(scoreCheck);
			console.log("scoreArray" + scoreArray);
		}

		for (var i = 0; i < scoreArray.length; i++) {
			if(scoreArray[i] <= scoreArray[bestMatch]){
					bestMatch = i
			}
		}
			
		var newFriend = friends[bestMatch]		
	

		friends.push(matchSeeker);

		res.json(newFriend);

	 });

 }
	
