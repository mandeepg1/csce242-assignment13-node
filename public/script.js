const showActors = async() => {
    const moviestarJSON = await getActors();
    const moviestarDiv = document.getElementById("movie-star-div");

    if (moviestarJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    const theSectionsContainer = document.createElement("div");
    theSectionsContainer.classList.add("the-sections");
    moviestarDiv.append(theSectionsContainer);
    
    moviestarJSON.forEach((star) => {
        const section = document.createElement("section");
        theSectionsContainer.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = star.name;
        section.append(h3);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + star.img;
        section.append(img);

        const p = document.createElement("p");
        p.innerHTML = `<strong>Age:</strong> ${star.age}<br> <strong>Height: </strong>${star.height}<br>
        <strong>Born:</strong> ${star.born}<br> <strong>Movies: </strong> ${star.movies.join(', ')}`;
        section.append(p);

    });

}

const getActors = async() => {
    try {
        return (await fetch("http://localhost:3000/api/movie-stars")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showActors();