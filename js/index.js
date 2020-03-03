showUrl = "https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/schedule"
fetch(showUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createShow(json);
    })
    .catch(function(error){
        console.log(error);
    });

function createShow(json){
    const results = json;
    console.dir(results);
    const container = document.querySelector(".results")

    let html = "";
    results.forEach(function (show) {
        const title = show.show.name;
        let image;
        if (show.show.image.medium) {
            image = show.show.image.medium;
        } else {
            image = "https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg";
        }

        const showDetails = `<div class="show column">
                                <a href="details.html?id=${show.show.id}">
                                    <div class="image" style="background-image: url(${image});"></div>
                                </a>
                                <div class="details">
                                    <h4 class="name">${title}</h4>
                                    <a class="btn details" href="details.html?id=${show.show.id}">Details</a>
                                </div>
                            </div>`;
        html += showDetails;
    });
    container.innerHTML = html;
}

/*
const container = document.querySelector(".results")

const show = document.createElement("div");
show.className = "show col";
container.appendChild(show);

const image = document.createElement("div");
image.className = "image";
let backgroundImage;
if (show.show.image.medium) {
    backgroundImage = show.show.image.medium;
} else {
    backgroundImage = "https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg";
}
backgroundImage.style.backgroundImage = `url(${backgroundImage})`;
show.appendChild(image);

const showDetails = document.createElement("div");
showDetails.className = "details";
show.appendChild(showDetails);

const title = document.createElement("h4");
title.className = "name";
title.innerHTML = show.show.name;
showDetails.appendChild(title);

const btn = document.createElement("a");
btn.className = "btn details";
btn.href = "details.html?id=${show.show.id}"
btn.innerText = Details;
showDetails.appendChild(btn);

*/

//make note of that i considered using the latter way, but that it seemed to be a bit too tedious and too much unnecessary code
