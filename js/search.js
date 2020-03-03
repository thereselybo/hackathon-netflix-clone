const searchBtn = document.querySelector("#search_btn")

searchBtn.addEventListener("click", search)

function search () {
    const searchBar = document.querySelector(".search-bar");
    const searchValue = searchBar.value;
    
    

}


function checkLength(value) {

    const trimmed = value.trim();
    if (trimmed.length) {
        return true;
    } else {
        return false;
    }
}