const shareBtn = document.querySelector(".container--bot--share--image");
const bubbleContainer = document.querySelector(".bubbleContainer");
const user = document.querySelector(".container--bot--user--info");
const userPicture = document.querySelector(".container--bot--user--picture");
const mq = window.matchMedia("(min-width: 960px)");
const contBot = document.querySelector(".container--bot");

const displayVisible = () => {
  bubbleContainer.classList.remove("invisible");
  shareBtn.classList.add("container--bot--share--image--activated");
};

const displayInvisible = () => {
  bubbleContainer.classList.add("invisible");
  shareBtn.classList.remove("container--bot--share--image--activated");
};

const queriesVisible = () => {
  user.classList.add("invisible");
  userPicture.classList.add("invisible");
  contBot.classList.add("botBg");
  bubbleContainer.classList.remove("invisible");
  shareBtn.classList.add("container--bot--share--image--activated");
};

const queriesInvisible = () => {
  user.classList.remove("invisible");
  userPicture.classList.remove("invisible");
  contBot.classList.remove("botBg");
  bubbleContainer.classList.add("invisible");
  shareBtn.classList.remove("container--bot--share--image--activated");
};

shareBtn.addEventListener("click", () => {
  if (mq.matches) {
    user.classList.remove("invisible");
    userPicture.classList.remove("invisible");
    contBot.classList.remove("botBg");
    if (bubbleContainer.classList.contains("invisible")) {
      displayVisible();
    } else {
      displayInvisible();
    }
  } else {
    if (user.classList.contains("invisible")) {
      queriesInvisible();
    } else {
      queriesVisible();
    }
  }
});
