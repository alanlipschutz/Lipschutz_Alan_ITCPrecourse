// if (
//   event.target.tagName !== "IMG" || //si el tag es img
//   !event.target.classList.contains("hungry") // si el bicho no esta en el case hambriento, entonces no sirve
// ) {
//   return;
// }

// show and hide text in About

const cardOne = document.querySelector(".card__one");
const pOne = document.querySelector(".p__one");
const cardTwo = document.querySelector(".card__two");
const pTwo = document.querySelector(".p__two");
const cardThree = document.querySelector(".card__three");
const pThree = document.querySelector(".p__three");

function showInformation(card, info) {
  card.addEventListener("click", (e) => {
    if (info.classList.contains("hide")) {
      info.classList.remove("hide");
    } else {
      info.classList.add("hide");
    }
  });
}

function showMyInfo() {
  showInformation(cardOne, pOne);
  showInformation(cardTwo, pTwo);
  showInformation(cardThree, pThree);
}

// show and hide text in About

// change src of the map in one iframe
const buenosAires = {
  name: "Buenos Aires City",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483387461!2d-58.503338712402304!3d-34.615803735965876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1640201988946!5m2!1sen!2sar",
};

const telAviv = {
  name: "Tel Aviv",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309720256!2d34.727205664150475!3d32.08791223266417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sar!4v1640202794604!5m2!1sen!2sar",
};
const valencia = {
  name: "Valencia",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79010.61492854048!2d-0.4118823917796803!3d39.44575115454797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia%2C%20Spain!5e0!3m2!1sen!2sar!4v1640202887288!5m2!1sen!2sar",
};

const toronto = {
  name: "Toronto",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289885642!2d-79.5181421748505!3d43.7181556616664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sar!4v1640202968582!5m2!1sen!2sar",
};

const mapTitleEl = document.querySelector(".embed-map__city");
const mapEl = document.querySelector(".iframe");
let currentlySelected = 0;
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const cities = [buenosAires, telAviv, valencia, toronto];

function previous() {
  btnRight.disabled = false;
  currentlySelected--;
  mapEl.src = cities[currentlySelected].src;
  mapEl.addEventListener("load", (e) => {
    mapTitleEl.innerHTML = cities[currentlySelected].name;
  });
  if (currentlySelected === 0) {
    btnLeft.disabled = true;
  }
}

function next() {
  btnLeft.disabled = false;
  currentlySelected++;
  mapEl.src = cities[currentlySelected].src;
  mapEl.addEventListener("load", (e) => {
    mapTitleEl.innerHTML = cities[currentlySelected].name;
  });
  if (currentlySelected + 1 === cities.length) {
    btnRight.disabled = true;
  }
}

//change src of the map in one iframe

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

function init() {
  showMyInfo();
  showArray();

  btnRight.addEventListener("click", (e) => {
    next();
  });
  btnLeft.addEventListener("click", (e) => {
    previous();
  });
}

init();
