const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const imgElement = document.getElementsByTagName('img')[0];
const p = fetch(url)
    .then(response => {
        return response.json();
}).then(catsArray => {
    displayCat(catsArray);
});

function displayCat (cats: any) {
    console.log(cats[0].url);
    let catImage = cats[0].url
    console.log(catImage);
    imgElement.setAttribute('src', catImage);
};

