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
    heading.className = "col_down"
    heading.innerText = json.name;
    container.appendChild(heading);

    const backgroundImage = document.createElement("div");
    backgroundImage.className = "details-image col_down";
    backgroundImage.style.backgroundImage = `url("${json.image.original}")`;
    container.appendChild(backgroundImage);

    const summary = document.createElement("div");
    summary.className = "content";
    summary.innerHTML = json.summary;
    container.appendChild(summary);

    const rowContainer = document.createElement("div");
    rowContainer.className = "col_container";
    container.appendChild(rowContainer);

    const language = document.createElement("div");
    language.className = "col detail";
    language.innerHTML = `<h3>Language: </h3><p>${json.language}</p>`;
    rowContainer.appendChild(language);

    const genres = document.createElement("div");
    genres.className = "col detail";
    if(json.genres.length) {
        genres.innerHTML = `<h3>Genres: </h3><p>${json.genres}</p>`;
        rowContainer.appendChild(genres);
    }

    const accordion = document.createElement("button");
    accordion.className = "accordion";
    accordion.innerHTML = `<h3>Schedule</h3>`;
    container.appendChild(accordion);

    const schedule = document.createElement("div");
    schedule.className = "panel";
    schedule.style.display = "none";
    schedule.innerHTML =   `<p>Days: ${json.schedule.days} <br>
                                Time: ${json.schedule.time}
                            </p>`;
    container.appendChild(schedule);

    accordion.addEventListener("click", function openPanel() {
        if(schedule.style.display === "none") {
            schedule.style.display = "block";
        } else {
            schedule.style.display = "none";
        }
    });
}

    /*
    make a note on genres: 
        noticed that not all shows had genre, so added an if else statement to check if the show had genres, and if true then add genres as well as language to that div
    
    
    
    make a note on accordion:
        tried to append child on click if schedule.innerHTML === false and remove if === true
        worked on first try, but got error on several attempts
        then simply set display to none on default and added block on click if none, and else set it to none
   */

//title
//pictures
//summary
//language
//genres
//schedule
    //accordion menu with the info

    
//change page title 
