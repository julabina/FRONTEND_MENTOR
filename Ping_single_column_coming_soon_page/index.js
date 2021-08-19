console.log("Challenge by Frontend Mentor. Coded by Lenfumé julien.");
console.log("https://github.com/julabina");

const mail = document.getElementById("mail");
const btn = document.querySelector(".btn");
const span = document.getElementById("error");
const spanQueries = document.getElementById("errorQueries");

const errorDisplay = (message, valid) => {
  if (window.matchMedia("(min-width: 1141px)").matches) {
    span.classList.remove("error");
    span.textContent = message;
    mail.classList.add("errorInput");
    spanQueries.classList.add("error");
    btn.classList.remove("btnError");
  } else {
    spanQueries.classList.remove("error");
    spanQueries.textContent = message;
    mail.classList.add("errorInput");
    span.classList.add("error");
    btn.classList.add("btnError");
  }
};

const emptyInput = () => {
  span.classList.add("error");
  spanQueries.classList.add("error");
  mail.value = "";
  mail.classList.remove("errorInput");
  btn.classList.remove("btnError");
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!mail.value.length > 0) {
    errorDisplay("Email cannot be empty");
  } else if (!mail.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("Please provide a valid email address");
  } else {
    email = mail.value;
    const data = {
      email,
    };
    console.log(data);
    emptyInput();
  }
});
