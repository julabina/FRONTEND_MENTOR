const hamburgerBtn = document.querySelector(".menuMobileHamb");
const crossBtn = document.querySelector(".menuMobileCross");
const nav = document.querySelector(".navHeader");

hamburgerBtn.addEventListener("click", () => {
  crossBtn.classList.remove("invisible");
  hamburgerBtn.classList.remove("visible");
  hamburgerBtn.classList.add("invisible");
  nav.classList.remove("invisibleMobile");
});

crossBtn.addEventListener("click", () => {
  hamburgerBtn.classList.remove("invisible");
  hamburgerBtn.classList.add("visible");
  crossBtn.classList.add("invisible");
  nav.classList.add("invisibleMobile");
});
