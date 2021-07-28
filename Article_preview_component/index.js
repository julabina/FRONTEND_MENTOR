const shareBtn = document.querySelector(".container--bot--share--image");
const container = document.querySelector(".bubbleContainer");

const displayVisible = () => {
  container.classList.remove("invisible");
  shareBtn.classList.add("container--bot--share--image--activated");
};

const displayInvisble = () => {
  container.classList.add("invisible");
  shareBtn.classList.remove("container--bot--share--image--activated");
};

shareBtn.addEventListener("click", () => {
  if (container.classList.contains("invisible")) {
    displayVisible();
  } else {
    displayInvisble();
  }
});
