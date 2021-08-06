const displayError = (tag, message, valid) => {
  const input = document.getElementById("formBox--" + tag);
  const span = document.querySelector(".formBox--" + tag + "--span");

  if (!valid) {
    input.classList.add("error");
    span.textContent = message;
  } else {
    input.classList.remove("error");
    span.textContent = message;
  }
};

const lastNameCheck = (value) => {
  if (value.lenght > 0 && (value.lenght > 2 || value.lenght < 25)) {
    console.log("test 1");
  } else if (!value.match(/^[a-zA-Zé èà]*$/)) {
    console.log("test 2");
  } else {
    console.log("test 3");
  }
};

const FirstNameCheck = (value) => {
  if (value.lenght > 0 && (value.lenght > 2 || value.lenght < 25)) {
    /* aaaaa */
  } else if (!value.match(/^[a-zA-Zé -è]*$/)) {
    /* dazadad */
  } else {
    /* dsffzfzfzfz */
  }
};

const emailCheck = (value) => {
  if (value.lenght > 0) {
    /* dfzfef */
  } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    /* fzef */
  } else {
    /* zrerzerzer */
  }
};

const passwordCheck = (value) => {
  if (value.lenght > 0) {
    /* ezae */
  } else if (!value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$")) {
    /*
    https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    Minimum eight characters, at least one uppercase letter, one lowercase letter and one number*/
  } else {
    /* dffzfzefzeefz */
  }
};
