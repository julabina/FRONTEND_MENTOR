const mail = document.querySelector(".mailInput");
const btn = document.querySelector(".arrowContainer");
let itValid;

const displayError = (message, valid) => {
  const span = document.querySelector(".mailSpan > span");
  const mailBox = document.querySelector(".mail");
  const error = document.getElementById("error");

  if (!valid) {
    span.textContent = message;
    error.classList.remove("invisible");
    mailBox.classList.add("red");
  } else {
    span.textContent = message;
    error.classList.add("invisible");
    mailBox.classList.remove("red");
  }
};

const mailCheck = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    displayError("Please provide a valid email");
    itValid = false;
  } else {
    displayError("", true);
    itValid = true;
  }
};

mail.addEventListener("input", (e) => {
  mailCheck(e.target.value);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (itValid === true) {
    alert("Valid email");
  }
});
