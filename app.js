var url = "https://api.thecatapi.com/v1/images/search?limit=10";
var imgElement = document.getElementsByTagName('img')[0];
var p = fetch(url)
    .then(function (response) {
    return response.json();
}).then(function (catsArray) {
    displayCat(catsArray);
});
function displayCat(cats) {
    console.log(cats[0].url);
    var catImage = cats[0].url;
    console.log(catImage);
    imgElement.setAttribute('src', catImage);
}
;
