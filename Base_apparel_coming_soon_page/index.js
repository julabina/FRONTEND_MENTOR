const mail = document.querySelector(".mailInput");
const btn = document.querySelector(".arrowContainer");
const error = document.getElementById("error");

const displayError = (message, valid) => {
  const span = document.querySelector(".mailSpan > span");
  const mailBox = document.querySelector(".mail");
};

const mailCheck = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    displayError("");
    console.log("pas bon");
  } else {
    console.log("bon");
  }
};

mail.addEventListener("input", (e) => {
  mailCheck(e.target.value);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (mailCheck) {
    console.log("popopo");
  } else {
    console.log("doingdoingdoing");
  }
});
