const progressBar = document.querySelector(
  ".mainContainer__goal__progressBar__progress"
);
const bookmarkBtn = document.querySelector(
  ".mainContainer__topBtnContainer__bookmarkBtn"
);
const bookmarkSpan = document.getElementById("bookmark");
const bookmarkImg = document.querySelector(
  ".mainContainer__topBtnContainer__bookmarkBtn__img"
);

let backed = 89914;
let backedGoal = 100000;
let pourcent = 0;

bookmarkSpan.textContent = "Bookmark";

const displayProgress = () => {
  calculProgress();
  let total = Math.round(pourcent * 100) / 100;
  progressBar.style.width = total + "%";
};

const calculProgress = () => {
  let poucentBase = 100 / backedGoal;
  pourcent = poucentBase * backed;
};

displayProgress();

bookmarkBtn.addEventListener("click", () => {
  if (bookmarkBtn.classList.contains("bookmarked")) {
    bookmarkBtn.classList.remove("bookmarked");
    bookmarkSpan.textContent = "Bookmark";
    bookmarkImg.classList.remove("bookmarkImgFiltered");
  } else {
    bookmarkBtn.classList.add("bookmarked");
    bookmarkSpan.textContent = "Bookmarked";
    bookmarkImg.classList.add("bookmarkImgFiltered");
  }
});
