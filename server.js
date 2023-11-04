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
        age: "49",
        height: "6'0",
        born: "Haverfordwest, United Kingdom",
        movies: ["Batman Begins","The Dark Knight","The Dark Knight Rises"],
        img: "images/bale.jpg"
    };
    actors[1] = {
        name: "Anne Hathaway",
        age: "40",
        height: "5'8",
        born: "Brooklyn, New York, NY",
        movies: ["The Devil Wears Prada","Hustle","The Dark Knight Rises"],
        img: "images/hathaway.jpg"
    };
    actors[2] = {
        name: "Tom Cruise",
        age: "61",
        height: "5'7",
        born: "Syracuse, NY",
        movies: ["Top Gun","Top Gun: Maverick","Mission Impossible: Rogue Nation"],
        img: "images/cruise.jpg"
    };
    actors[3] = {
        name: "Catherine Zeta-Jones",
        age: "54",
        height: "5'7",
        born: "Swansea, United Kingdom",
        movies: ["The Legend of Zorro","The Mask of Zorro","Ocean's Twelve"],
        img: "images/catherine.jpg"
    };
    actors[4] = {
        name: "Ryan Gosling",
        age: "42",
        height: "6'0",
        born: "London, Canada",
        movies: ["Barbie","The Gray Man","Blade Runner 2049"],
        img: "images/gosling.jpg"
    };

    res.json(actors);
});

app.listen(3000, () => {
    console.log("listening");
});