// card with GitHub

//RECORDAR SACAR EL COMMENT DE LA PRIMERA LINEA
const GITHUB_URL = "https://api.github.com/users/alanLipschutz";
const profileImage = document.querySelector(".profile-image");
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("myName");
    profileName.innerHTML = data.name;
  });

// card with GitHub

// when you click the card, it shows you my info

const card = document.querySelector(".card");
const cardNameContainer = document.querySelector(".card__name__container");
const cardNameInfo = document.querySelector(".myName__info");
card.addEventListener("click", (e) => {
  if (cardNameInfo.classList.contains("hide")) {
    cardNameContainer.classList.add("hide");
    cardNameInfo.classList.remove("hide");
  } else {
    cardNameInfo.classList.add("hide");
    cardNameContainer.classList.remove("hide");
  }
});

// -----------footer array --------------

lang = ["HTML", "CSS", "JavaScript"];

function createString(array) {
  const lang1 = array.splice(0, array.length - 1);
  const lang2 = array[array.length - 1];

  return `This page was built using: ${lang1.join(", ")} and ${lang2}`;
}

function showArray() {
  const footerLegend = document.querySelector(".footer__lng__paragraph");
  footerLegend.innerText = createString(lang);
}
showArray();

function init() {}

init();
