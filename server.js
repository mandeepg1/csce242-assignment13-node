const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/movie-stars", (req, res) => {
    const actors = [];
    actors[0] = {
        name: "Christian Bale",
        age: "40 something",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };
    actors[1] = {
        name: "Anne Hathaway",
        age: "40 something",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };
    actors[2] = {
        name: "Tom Hardy",
        age: "40 something",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };
    actors[3] = {
        name: "Alfred maybe",
        age: "40 something",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };
    actors[4] = {
        name: "Morgan Freeman",
        age: "40 something",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };

    res.json(actors);
});

app.listen(3000, () => {
    console.log("listening");
});