const formEl = document.querySelector(".contact-form");
const nameEl = document.querySelector(".name");
const lastNameEl = document.querySelector(".last-name");
const emailEl = document.querySelector(".email");
const commentEl = document.querySelector(".comment");
const newsEl = document.querySelector(".newsletter");
const formBtnEl = document.querySelector(".btn");
const divSuccessEl = document.querySelector(".msg-success");
formBtnEl.disabled = true;

function buttonDisabled() {
  formEl.addEventListener("change", () => {
    divSuccessEl.classList.add("hide");

    if (nameEl.value !== "" && emailEl.value !== "" && commentEl.value !== "") {
      formBtnEl.disabled = false;
    } else {
      formBtnEl.disabled = true;
    }
  });
}

function submitForm() {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const value = Object.fromEntries(data.entries());
    console.log(
      `First name: ${e.target.name.value}, Last name: ${e.target.lastName.value}, Email: ${e.target.email.value}, Comment: ${e.target.comment.value}, Do you want to receive our newsletter: ${e.target.newsletter.value}`
    );
    divSuccessEl.classList.remove("hide");
    e.target.reset();
  });
}

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
  buttonDisabled();
  submitForm();
  showArray();
}

init();
