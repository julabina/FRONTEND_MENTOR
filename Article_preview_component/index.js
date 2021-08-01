const shareBtn = document.querySelector(".container--bot--share--image");
const container = document.querySelector(".bubbleContainer");
const mediaQueries = matchMedia("(min-width: 960px)");

const displayVisible = () => {
  container.classList.remove("invisible");
  shareBtn.classList.add("container--bot--share--image--activated");
};

const displayInvisble = () => {
  container.classList.add("invisible");
  shareBtn.classList.remove("container--bot--share--image--activated");
};

shareBtn.addEventListener("click", () => {
  if (mediaQueries.matches) {
    console.log("11111111111");
  } else {
    console.log("2222222222222");
  }
});

/* if (container.classList.contains("invisible")) {
  displayVisible();
} else {
  displayInvisble();
} */
