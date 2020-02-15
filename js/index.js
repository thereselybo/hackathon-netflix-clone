showUrl = "http://api.tvmaze.com/schedule"
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
    results = json;
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

        const showDetails = `<div class="show col">
                                <div class="image" style="background-image: url(${image});"></div>
                                <div class="details">
                                    <h4 class="name">${title}</h4>
                                    <a class="btn details" href="details.html?id=${show.show.id}">Details</a>
                                </div>
                            </div>`;
        html += showDetails;
    });
    container.innerHTML = html;
}
