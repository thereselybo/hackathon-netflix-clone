const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows/";
const showUrl = `${baseUrl}${id}`;
const episodesUrl = `${showUrl}/episodes`;
const seasonsUrl = `${showUrl}/seasons`;
const castUrl = `${showUrl}/cast`;

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

fetch (episodesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleEpisodes(json);
    })
    .catch(function(error) {
        console.log(error);
    });

fetch (seasonsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleSeasons(json);
    })
    .catch(function(error) {
        console.log(error);
    });

fetch (castUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleCast(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createShow (json) {
    console.dir(json);
    const container = document.querySelector(".results");

    const heading = document.createElement("h1");
    // heading.className = "col_down is-vcentered"
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
    rowContainer.className = "columns is-mobile";
    container.appendChild(rowContainer);

    const language = document.createElement("div");
    language.className = "column detail";
    language.innerHTML = `<h3>Language: </h3><p>${json.language}</p>`;
    rowContainer.appendChild(language);

    const genres = document.createElement("div");
    genres.className = "column detail";
    if(json.genres.length) {
        genres.innerHTML = `<h3>Genres: </h3><p>${json.genres}</p>`;
        rowContainer.appendChild(genres);
    }

    //old accordion:
    // const accordion = document.createElement("button");
    // accordion.className = "accordion";
    // accordion.innerHTML = `<h3>Schedule</h3>`;
    // container.appendChild(accordion);
    // const tabContainer = document.createElement("div");
    // tabContainer.className = "columns is-mobile ";
    // container.appendChild(tabContainer);

    // const accordionContainer = document.createElement("div");
    // tabContainer.appendChild(accordionContainer);

    // tabContainer.appendChild(rowContainer);
    // const schedule = document.createElement("button");
    // schedule.className = "accordion";
    // schedule.innerHTML = `<h3>Schedule</h3>`;
    // rowContainer.appendChild(schedule);

    const tabs = document.createElement("div");
    tabs.className = "tabs is-centered";
    tabs.innerHTML = `<ul>
                        <li class="tab schedule is-active">
                            <a>Schedule</a>
                            <div class="tabContent scheduleDiv" style = "display: none;">
                                <p>Days: ${json.schedule.days} <br>
                                    Time: ${json.schedule.time}
                                </p>
                            </div>
                        </li>
                        <li class="tab episodes">
                            <a>Episodes</a>
                            <div class="tabContent episodesDiv" style="display: none;">
                            </div>
                        </li>
                        <li class="tab seasons">
                            <a>Seasons</a>
                            <div class="tabContent seasonsDiv" style="display: none;">
                            </div>
                        </li>
                    </ul>`;
    container.appendChild(tabs);

    const schedule = document.querySelector(".schedule");
    const scheduleDiv = document.querySelector(".scheduleDiv");

    const episodes = document.querySelector(".episodes");
    const episodesDiv = document.querySelector(".episodesDiv");

    const seasons = document.querySelector(".seasons");
    const seasonsDiv = document.querySelector(".seasonsDiv");

    // const scheduleDiv = document.createElement("div");
    // scheduleDiv.className = "panel";
    // scheduleDiv.style.display = "none";
    // scheduleDiv.innerHTML =   `<p>Days: ${json.schedule.days} <br>
    //                             Time: ${json.schedule.time}
    //                         </p>`;
    // rowContainer.appendChild(scheduleDiv);

    schedule.addEventListener("click", function openPanel() { //or function openPanel(){...}
        if(schedule.className === "is-active") {
            scheduleDiv.style.display = "block";
        } else {
            schedule.classList.remove = "is-active";
            scheduleDiv.style.display = "none";
        }
        
    });

    // const episodes = document.createElement("button");
    // episodes.className = "column accordion";
    // episodes.innerHTML = `<h3>Episodes</h3>`;
    // tabContainer.appendChild(episodes);

    // const episodesDiv = document.createElement("div");
    // episodesDiv.className = "panel episodesDiv";
    // episodesDiv.style.display = "none";
    // tabContainer.appendChild(episodesDiv);

    episodes.addEventListener("click", function openSecondPanel() {
        if(episodes.className === "is-active") {
            episodesDiv.style.display = "block";
        } else {
            episodes.classList.remove = "is-active";
            episodesDiv.style.display = "none";
        }
    });

    // const seasons = document.createElement("button");
    // seasons.className = "column accordion";
    // seasons.innerHTML = `<h3>Seasons</h3>`;
    // tabContainer.appendChild(seasons);

    // const seasonsDiv = document.createElement("div");
    // seasonsDiv.className = "panel seasonsDiv";
    // seasonsDiv.style.display = "none";
    // tabContainer.appendChild(seasonsDiv);

    seasons.addEventListener("click", function openThirdPanel() {
        if(seasons.className === "is-active") {
            seasonsDiv.style.display = "block";
        } else {
            seasons.classList.remove = "is-active";
            seasonsDiv.style.display = "none";
        }
    });

    function openTab(event, tab) {
        const tabs = document.querySelectorAll(".tab");
        const tabContent = document.querySelectorAll(".tabContent");
        tabs.forEach(function(tab) {
            
        })
    }
    
}

function handleEpisodes(json) {
    console.dir(json);
    const result = json;
    const episodesDiv = document.querySelector(".episodesDiv");

    let html = "";

    result.forEach(function(episode) {
        let episodeDetails = `<div class="column">
                                <a href="">
                                    <div style="background-image: url("https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg");">
                                        <h3>Episode ${episode.number}</h3>
                                    </div>
                                </a>
                            </div>`;
        html += episodeDetails;
    });

    episodesDiv.innerHTML = html;
}

function handleSeasons(json) {
    console.dir(json);
    const result = json;
    const seasonsDiv = document.querySelector(".seasonsDiv");

    let html = "";

    result.forEach(function(season) {
        let seasonDetails = `<div class="column">
                                <a href="">
                                    <div style="background-image: url("https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg");">
                                        <h3>Season ${season.number}</h3>
                                    </div>
                                </a>
                            </div>`;
        html += seasonDetails;
    });

    seasonsDiv.innerHTML = html;
}

function handleCast(json) {
    console.dir(json);
    const result = json;
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
