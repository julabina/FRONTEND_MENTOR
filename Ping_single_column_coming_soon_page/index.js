console.log("Challenge by Frontend Mentor. Coded by Lenfumé julien.");
console.log("https://github.com/julabina");

const mail = document.getElementById("mail");
const btn = document.querySelector(".btn");
const span = document.getElementById("error");

const errorDisplay = (message, valid) => {
  span.classList.remove("error");
  span.textContent = message;
  mail.classList.add("errorInput");
};

const emptyInput = () => {
  span.classList.add("error");
  mail.value = "";
  mail.classList.remove("errorInput");
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
