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
const selectRewardBtns = document.querySelectorAll(".mainContainer__pack__btn");
const backThisProjectBtn = document.querySelector(".mainContainer__topBtnContainer__backProjectBtn");
const hambMenu = document.querySelector(".header__mobileMenu")
const menuMobile = document.querySelector(".header__menu")
const logo = document.querySelector(".header__logoImg")
/* modales back this project start*/
const modaleSuccess = document.querySelector(".modaleSucces")
const gotItBtn = document.querySelector(".modaleSucces__container__btn")
const noReward = document.querySelector(".modaleChoseBack__container__noRewardContainer");
const noRewardSelect = document.querySelector(".modaleChoseBack__container__noRewardContainer__selectContainer__select");
const choices = document.querySelectorAll(".modaleChoseBack__container__choiceContainer");
const choicesSelectDiv = document.querySelectorAll(".modaleChoseBack__container__choiceContainer__gridContainer__select");
const bottomContainer = document.querySelectorAll(".modaleChoseBack__container__choiceContainer__bottom");
const darkenBody = document.querySelector(".darkenBody");
const modaleBack = document.querySelector(".modaleChoseBack");
const closeModale = document.querySelector(".modaleChoseBack__container__top__part1__closeBtn");
const continueBtn = document.querySelectorAll(".modaleChoseBack__container__choiceContainer__bottom__btns__continue")
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

const mobileImage = () => {
  if (menuMobile.classList.contains("header__menu--off")) {
    resetImgMobile();
    hambMenu.innerHTML = `
    <img src="./images/icon-hamburger.svg" alt="hambuerger icon">
    `
    darkenBody.classList.add("modaleOff");
    hambMenu.classList.remove("addZindex");
    logo.classList.remove("addZindex")
  } else {
    resetImgMobile();
    hambMenu.innerHTML = `
    <img src="./images/icon-close-menu.svg" alt="close menu icon">
    `
    darkenBody.classList.remove("modaleOff");
    hambMenu.classList.add("addZindex");
    logo.classList.add("addZindex")
  }
}

const resetImgMobile = () => {
  hambMenu.innerHTML = `
  `;
}

displayProgress();
mobileImage();

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

selectRewardBtns[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.remove("modaleOff");
  darkenBody.classList.remove("modaleOff");
  resetChoices();
  choices[0].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[0].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  bottomContainer[0].classList.remove("notSelect");
})

selectRewardBtns[1].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.remove("modaleOff");
  darkenBody.classList.remove("modaleOff");
  resetChoices();
  choices[1].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[1].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  bottomContainer[1].classList.remove("notSelect");
})

selectRewardBtns[2].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.remove("modaleOff");
  darkenBody.classList.remove("modaleOff");
  resetChoices();
  choices[2].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[2].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  bottomContainer[2].classList.remove("notSelect");
})

backThisProjectBtn.addEventListener("click", () => {
  modaleBack.classList.remove("modaleOff");
  darkenBody.classList.remove("modaleOff");
  resetChoices();
})

hambMenu.addEventListener("click", () => {
  if (menuMobile.classList.contains("header__menu--off")) {
    console.log("1");
    menuMobile.classList.remove("header__menu--off");
    mobileImage();
  } else {
    console.log("2");
    menuMobile.classList.add("header__menu--off");
    mobileImage();
  }
})

/* modales back this project start */
const resetChoices = () => {
  noReward.classList.remove("modaleChoseBack__container__noRewardContainer--selected");
  noRewardSelect.classList.remove("modaleChoseBack__container__noRewardContainer__selectContainer__select--selected");
  for (let i = 0; i < choices.length; i++) {
    choices[i].classList.remove("modaleChoseBack__container__choiceContainer--selected");
    choicesSelectDiv[i].classList.remove("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
    bottomContainer[i].classList.add("notSelect");
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
  bottomContainer[0].classList.remove("notSelect");
})

choices[1].addEventListener("click", () => {
  resetChoices();
  choices[1].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[1].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  bottomContainer[1].classList.remove("notSelect");
})

choices[2].addEventListener("click", () => {
  resetChoices();
  choices[2].classList.add("modaleChoseBack__container__choiceContainer--selected");
  choicesSelectDiv[2].classList.add("modaleChoseBack__container__choiceContainer__gridContainer__select--selected");
  bottomContainer[2].classList.remove("notSelect");
})

closeModale.addEventListener("click", () => {
    modaleBack.classList.add("modaleOff");
    darkenBody.classList.add("modaleOff");
})

continueBtn[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.add("modaleOff");
  modaleSuccess.classList.remove("modaleOff");
})

continueBtn[1].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.add("modaleOff");
  modaleSuccess.classList.remove("modaleOff");
})

continueBtn[2].addEventListener("click", () => {
  window.scrollTo(0, 0);
  modaleBack.classList.add("modaleOff");
  modaleSuccess.classList.remove("modaleOff");
})

gotItBtn.addEventListener("click", () => {
  modaleSuccess.classList.add("modaleOff");
  darkenBody.classList.add("modaleOff");
})
/* modales back this project end */