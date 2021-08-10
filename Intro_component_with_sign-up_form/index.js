const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".rightContainer--formBox--btn--h3");
let lastName, firstName, mail, password;

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

const emptyInputs = () => {
  const inputss = document.querySelectorAll("input");
  inputss[0].value = "";
  inputss[1].value = "";
  inputss[2].value = "";
  inputss[3].value = "";
  lastName = null;
  firstName = null;
  mail = null;
  password = null;
};

const lastNameCheck = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    displayError(
      "lastName",
      "Last name must contain between 2 and 25 characters"
    );
  } else if (!value.match(/^[a-zA-Zé èà]*$/)) {
    displayError("lastName", "The last name must contain only letters");
  } else {
    displayError("lastName", "", true);
    lastName = value;
  }
};

const FirstNameCheck = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    displayError(
      "firstName",
      "First name must contain between 2 and 25 characters"
    );
  } else if (!value.match(/^[a-zA-Zé èà]*$/)) {
    displayError("firstName", "The first name must contain only letters");
  } else {
    displayError("firstName", "", true);
    firstName = value;
  }
};

const emailCheck = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    displayError("mail", "Email is not valid");
  } else {
    displayError("mail", "", true);
    mail = value;
  }
};

const passwordCheck = (value) => {
  /* https://regexr.com/3bfsi */
  if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
    displayError(
      "password",
      "The password need contain 8 characters, 1 uppercase letter and 1 number"
    );
  } else {
    displayError("password", "", true);
    password = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "formBox--lastName":
        lastNameCheck(e.target.value);
        break;
      case "formBox--firstName":
        FirstNameCheck(e.target.value);
        break;
      case "formBox--mail":
        emailCheck(e.target.value);
        break;
      case "formBox--password":
        passwordCheck(e.target.value);
        break;
      default:
        null;
    }
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (lastName && firstName && mail && password) {
    const userData = {
      lastName,
      firstName,
      mail,
      password,
    };
    console.log(userData);
    emptyInputs();
  } else {
    alert("All required fields");
  }
});
