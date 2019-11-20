require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const keys = require("./key.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

let input = process.argv[3];

function concertQuery() {
    let artistEntry = input;
    let queryUrl = "https://rest.bandsintown.com/artists/" + artistEntry + "/events?app_id=codingbootcamp"
    axios.get(queryUrl)
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

function songQuery() {
    let songEntry = input;
    spotify.search({ type: 'track', query: songEntry })
        .then((response) => {
            console.log(response)
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function movieQuery() {
    let movieEntry = input;
    let queryUrl = "http://www.omdbapi.com/?t=" + movieEntry + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl)
        .then((response) => {
            console.log(response)
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function doWhatItSays() {
    let userEntry = input;
}

if (process.argv[2] === "concert-this") {
    concertQuery();
} else if (process.argv[2] === "spotify-this-song") {
    songQuery();
} else if (process.argv[2] === "movie-this") {
    movieQuery();
} else if (process.argv[2] === "do-what-it-says") {
    doWhatItSays();
} else {
    console.log("Enter Valid Command after 'liri.js'. Ex: node liri.js <valid command> <user input>. List of valid commands: 'concert-this', 'spotify-this-song', 'movie-this','do-what-it-says'.")
}