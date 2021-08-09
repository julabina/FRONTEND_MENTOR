const displayError = (tag, message, valid) => {
  const input = document.getElementById("formBox--" + tag);
  const span = document.querySelector(".formBox--" + tag + "--span");
  const image = document.querySelector(
    ".rightContainer--formBox--" + tag + "--img"
  );

  if (!valid) {
    input.classList.add("error");
    span.textContent = message;
    image.classList.remove("hidden");
  } else {
    input.classList.remove("error");
    span.textContent = message;
    image.classList.add("hidden");
  }
};

const lastNameCheck = (value) => {
  if (value.lenght > 0 && (value.lenght > 2 || value.lenght < 25)) {
    displayError(
      "lastName",
      "Last name must contain between 2 and 25 characters"
    );
  } else if (!value.match(/^[a-zA-Zé èà]*$/)) {
    displayError("lastName", "The first name must contain only letters");
  } else {
    displayError("lastName", "", valid);
  }
};

const FirstNameCheck = (value) => {
  if (value.lenght > 0 && (value.lenght > 2 || value.lenght < 25)) {
    displayError(
      "firstName",
      "First name must contain between 2 and 25 characters"
    );
  } else if (!value.match(/^[a-zA-Zé -è]*$/)) {
    displayError("firstName", "The first name must contain only letters");
  } else {
    displayError("firstName", "", valid);
  }
};

const emailCheck = (value) => {
  if (value.lenght > 0) {
    displayError("mail", "Email must not be empty");
  } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    displayError("mail", "Email is not valid");
  } else {
    displayError("mail", "", valid);
  }
};

const passwordCheck = (value) => {
  if (!value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$")) {
    displayError(
      "password",
      "The password need contain 8 characters, 1 uppercase letter and 1 number"
    );
    /*
    https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    Minimum eight characters, at least one uppercase letter, one lowercase letter and one number*/
  } else {
    displayError("password", "", valid);
  }
};
