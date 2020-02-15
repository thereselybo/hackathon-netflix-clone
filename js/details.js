const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "http://api.tvmaze.com/shows/";
const showUrl = `${baseUrl}${id}`;

fetch (showUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
        createShow(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createShow (json) {
    console.dir(json);
    const container = document.querySelector(".details-container");

    const heading = document.createElement("h1");
    heading.innerText = json.name;
    container.appendChild(heading);

    const backgroundImage = document.createElement("div");
    backgroundImage.className = "details-image";
    backgroundImage.style.backgroundImage = `url("${json.image.original}")`;
    container.appendChild(backgroundImage);

    const summary = document.createElement("div");
    summary.innerHTML = json.summary;
    container.appendChild(summary);

    const language = document.createElement("div");
    language.className = "col";
    language.innerHTML = `<h3>Language: </h3><p>${json.language}</p>`;
    container.appendChild(language);

    const genres = document.createElement("div");
    genres.className = "col";
    genres.innerHTML = `<h3>Genres: </h3><p>${json.genres}</p>`;
    container.appendChild(genres);
}

//title
//pictures
//summary
//language
//genres
//schedule
    //accordion menu with the info