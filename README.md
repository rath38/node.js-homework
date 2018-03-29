# node.js-homework

For this homework I made liri or language interpretation and recongnition interface. Its a command line base program that runs commands given to it in a terminal.It was made from javascript and node.js.

## Prerequisites

Things needed to installed before use.

```
NodeJS
``` 

```
Npm package twitter
```

```
Npm package request
```

```
Npm package node-spotify-api
```

```
Twitter account(optional)
```

```
Twitter Dev Api Account(optional)
```

```
Spotify Dev Api Account(optional)
```

### Installation

How to install.

```
1. Open git bash terminal.
```

```
2. Change directory to where you want to store the repository using "cd" command. 
```

```
3. Using the git "clone" command clone the repository to local storage using URL in the repository on Github.  
Example: "git clone https://github.com/someone/someone-repo.git"
```

```
4. Install needed npm packages using "npm install" in the terminal.
```

```
5. If you wish to not use the test twitter account or spotify dev account provide you must change the information located in "../node.js-homework/spotifyKeys.js" and "../node.js-homework/twitterKeys.js" (optional)
``` 

### Deployment

How to deploy on local machine.

```
1. While in git or bash terminal run "node liri.js" while in the node.js-homework directory.
```

### Usage

How to use.

To use liri you must use commands to tell it what to do.Some commands need to be followed by the argument that goes after the command to tell it what to search for.Below will show the commands needed to operate liri both with pictures and text. 

* Movie This Command

![Movie-This1](/screenshots/movie-this.PNG)

```
Use the "movie-this" command followed by the movie you want to search. 
Example: "node liri.js movie-this example-movie"
```

* My Tweets Command

![My-Tweets1](/screenshots/my-tweets.PNG)

```
Use the "my-tweets" command to display the tweets from the test twitter account.
Example: "node liri.js my-tweets"
```

* Spotify This Song Command

![Spotify-This-Song1](/screenshots/spotify-this-song.PNG)

```
Using the "spotify-this-song" command followed by the song you want to search.
Example: "node liri.js spotify-this-song example-song"
```

* Do What It Says Command 

![Do-What1](/screenshots/do-what.PNG)

```
Using the "do-what-it-says" command liri will read a txt file and run a command off the text file.
Example: "node liri.js do-what-it-says"
```

### Built with

* Node.js

* JavaScript

### Authors

* Alexander Robinson