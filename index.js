window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

fetch ("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data => renderImage(data.message))

const next = document.getElementById("onClick");

const breeds = document.getElementById("breeds");

function renderImage(data){
    document.getElementById("dog").src = data;
}

next.addEventListener("onClick", renderImage);
