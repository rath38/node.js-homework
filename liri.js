var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var twitterKeys = require("./twitterKeys.js");

var spotifyKeys = require("./spotifyKeys.js");

var request = require("request");

var fs = require("fs");

var spotify = new Spotify(spotifyKeys);

var client = new Twitter(twitterKeys);

var nodeArgs = process.argv;

var command = process.argv[2];

var params = {user_id: '935193706092785665'};

var mediaName = "";

var songDefault = "the sign";


function spotifyThisSong(searchTerm) {


	spotify.search({ type: 'track', query: searchTerm }, function(err, data) {

if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].name)

console.log(data.tracks.items[0].artists[0].name)

console.log(data.tracks.items[0].album.name)

console.log(data.tracks.items[0].preview_url)




});



}

function movieThis(movieUrl) {

request(movieUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

  		console.log("Title: " + JSON.parse(body).Title);

  		console.log("Year of release: " + JSON.parse(body).Year);

  		console.log("IMDB rating: " + JSON.parse(body).Ratings[0].Value);

  		console.log("R.T rating: " + JSON.parse(body).Ratings[1].Value);

  		console.log("Country: " + JSON.parse(body).Country);

  		console.log("Language: " + JSON.parse(body).Language);

  		console.log("Plot: " + JSON.parse(body).Plot);

  		console.log("Actors: " + JSON.parse(body).Actors);
    
  }
});


}

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    mediaName = mediaName + "+" + nodeArgs[i];

  }

  else {

    mediaName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + mediaName + "&apikey=f80e7c2e";

var movieDefault = "http://www.omdbapi.com/?t=mr+nobody&apikey=f80e7c2e";

if (command === "my-tweets") {

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  
  if (!error && response.statusCode === 200) {
    
    for (var i = 0; i < tweets.length; i ++) {
    	
    	console.log(tweets[i].text);

    }

  
  }

	});

}

else if (command === "movie-this") {

	if (process.argv[3] === undefined) {

		movieThis(movieDefault);

	}

	else {

		movieThis(queryUrl);

	}


}

else if (command === "spotify-this-song") {

	
	 if (process.argv[3] === undefined ) {

		

	spotifyThisSong("the sign");

	}
 else {
spotifyThisSong(mediaName);
}

}

else if (command === "do-what-it-says") {

fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
 
spotifyThisSong(data.toString());

});

}
