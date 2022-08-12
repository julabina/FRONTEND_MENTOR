const questionBloc = document.querySelectorAll(".answer");
const btn = document.querySelectorAll(".questionContainer");
let reply1 = true;
let reply2 = true;
let reply3 = true;
let reply4 = true;
let reply5 = true;

const closeAnswer = () => {
  for (let i = 0; i < questionBloc.length; i++) {
    let a = 1 + i;
    const arrow = document.querySelector(".arrow" + a);
    const h2s = document.querySelectorAll("h2");
    questionBloc[i].textContent = "";
    arrow.style.transform = "none";
    h2s[i].style.fontWeight = "400";
    reply1 = true;
    reply2 = true;
    reply3 = true;
    reply4 = true;
    reply5 = true;
  }
};

const displayAnswer = (tag, answer) => {
  const container = document.getElementById("questionContainer-" + tag + "box");
  const para = document.querySelector("#questionContainer-" + tag + "box > p");
  const arrow = document.querySelector(".arrow" + tag);
  const h2 = document.getElementById("h2" + tag);
  para.textContent = answer;
  arrow.style.transform = "scaleY(-1)";
  h2.style.fontWeight = "bold";
  h2.style.color = "hsl(238, 29%, 16%)";
};

btn[0].addEventListener("click", () => {
  console.log("1");
  if (reply1 === true) {
    console.log("2");
    closeAnswer();
    displayAnswer(
      1,
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    );
    reply1 = false;
    reply2 = true;
    reply3 = true;
    reply4 = true;
    reply5 = true;
  } else {
    console.log("3");
    closeAnswer();
  }
});

btn[1].addEventListener("click", () => {
  if (reply2 === true) {
    closeAnswer();
    displayAnswer(
      2,
      "No more than 2GB. All files in your account must fit your allotted storage space."
    );
    reply1 = true;
    reply2 = false;
    reply3 = true;
    reply4 = true;
    reply5 = true;
  } else {
    closeAnswer();
  }
});

btn[2].addEventListener("click", () => {
  if (reply3 === true) {
    closeAnswer();
    displayAnswer(
      3,
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    );
    reply1 = true;
    reply2 = true;
    reply3 = false;
    reply4 = true;
    reply5 = true;
  } else {
    closeAnswer();
  }
});

btn[3].addEventListener("click", () => {
  if (reply4 === true) {
    closeAnswer();
    displayAnswer(
      4,
      "Yes! Send us a message and we’ll process your request no questions asked."
    );
    reply1 = true;
    reply2 = true;
    reply3 = true;
    reply4 = false;
    reply5 = true;
  } else {
    closeAnswer();
  }
});

btn[4].addEventListener("click", () => {
  if (reply5 === true) {
    closeAnswer();
    displayAnswer(
      5,
      "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    );
    reply1 = true;
    reply2 = true;
    reply3 = true;
    reply4 = true;
    reply5 = false;
  } else {
    closeAnswer();
  }
});
