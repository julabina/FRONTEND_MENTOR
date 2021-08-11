const menuBtn = document.querySelector(".menuNavRight");

const menuIN = () => {
  const menu = document.querySelector(".menuNav");
  if (menu.classList.contains("menuBack")) {
    menu.classList.remove("menuBack");
  } else {
    menu.classList.add("menuBack");
  }
};

menuBtn.addEventListener("click", () => {
  menuIN();
});
