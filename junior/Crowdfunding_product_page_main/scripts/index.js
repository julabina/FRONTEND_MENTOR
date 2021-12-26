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
/* modales back this project start*/
const noReward = document.querySelector(".modaleChoseBack__container__noRewardContainer");
const noRewardSelect = document.querySelector(".modaleChoseBack__container__noRewardContainer__selectContainer__select");
const choices = document.querySelectorAll(".modaleChoseBack__container__choiceContainer");
const choicesSelectDiv = document.querySelectorAll(".modaleChoseBack__container__choiceContainer__gridContainer__select");
/* modales back this project end */

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


/* modales back this project start */
const resetChoices = () => {
  noReward.classList.remove("modaleChoseBack__container__noRewardContainer--selected");
  noRewardSelect.classList.remove("modaleChoseBack__container__noRewardContainer__selectContainer__select--selected");
  for (let i = 0; i < choices.length; i++) {
    choices[i].classList.remove("modaleChoseBack__container__choiceContainer--selected");
    choicesSelectDiv[i].classList.remove("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  }
}

noReward.addEventListener("click", () => {
  resetChoices();
  noReward.classList.add("modaleChoseBack__container__noRewardContainer--selected");
  noRewardSelect.classList.add("modaleChoseBack__container__noRewardContainer__selectContainer__select--selected");
})

choices[0].addEventListener("click", () => {
  resetChoices();
  choices[0].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[0].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
})

choices[1].addEventListener("click", () => {
  resetChoices();
  choices[1].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[1].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
})

choices[2].addEventListener("click", () => {
  resetChoices();
  choices[2].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[2].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
})
/* modales back this project end */