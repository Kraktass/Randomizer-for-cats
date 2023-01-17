var url = "https://api.thecatapi.com/v1/images/search?limit=10";
var imageElement = document.createElement("img");
imageElement.className = ("catImage");
var p = fetch(url)
    .then(function (response) {
    return response.json();
}).then(function (catsArray) {
    displayCat(catsArray);
});
function displayCat(cats) {
    var randomizeBtn = document.querySelector(".randomizeButton");
    randomizeBtn.addEventListener("click", function (e) {
        var randomNr = Math.floor(Math.random() * cats.length);
        var catsDiv = document.querySelector(".container");
        catsDiv.innerHTML = "";
        catsDiv.style.display = "block";
        imageElement.style.height = "500px";
        imageElement.style.width = "850px";
        imageElement.src = cats[randomNr].url;
        catsDiv.append(imageElement);
    });
}
