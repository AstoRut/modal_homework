var API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".quote").innerText = data[0];
  });

// ==

const el = document.querySelector("h2");

const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

el.innerHTML = recipeName;

// ==

var data = {
  pick_it: "This is info about how to pick a recipe.",

  cook_it: "This is info about how to cook a recipe.",

  store_it: "This is info about how to store a recipe.",
};

var modal = document.querySelector(".modal");
var modalOuter = document.querySelector(".modal-outer");

var modalh3 = document.querySelector(".modal h3");
var modalinfo = document.querySelector(".modal p");

function showPopover(event) {
  //if (!event.target.matches(".beta, .closer")) return;
  if (!event.target.matches(".beta, .closer, li a")) return;
  if (event.target.matches("li a")) {
    let name = event.target.innerHTML.replace(" ", "_");
    modalh3.innerText = event.target.innerHTML;
    modalinfo.innerText = data[name];
  } else {
    modalh3.innerText = "Hi! I'm a Modal Window (ʘ‿ʘ)╯";
    modalinfo.innerText = "Information about the beta program.";
  }
  modalOuter.classList.toggle("open");
  event.preventDefault();
}

document.addEventListener("click", showPopover);
