const menuBtn = document.querySelector(".menuNavRight");
const menus = document.querySelectorAll(
  "#menu1, #menu2, #menu3, #menu4, #menu5"
);

const menuIN = () => {
  const menu = document.querySelector(".menuNavLeft");
  if (menu.classList.contains("menuBack")) {
    menu.classList.remove("menuBack");
  } else {
    menu.classList.add("menuBack");
  }
};

menuBtn.addEventListener("click", () => {
  menuIN();
});

menus[0].addEventListener("click", () => {
  const menu = document.getElementById("list1");
  const arrow = document.querySelector(".arrow1");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[1].addEventListener("click", () => {
  const menu = document.getElementById("list2");
  const arrow = document.querySelector(".arrow2");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[2].addEventListener("click", () => {
  const menu = document.getElementById("list3");
  const arrow = document.querySelector(".arrow3");
  console.log(menu);
  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[3].addEventListener("click", () => {
  const menu = document.getElementById("list4");
  const arrow = document.querySelector(".arrow4");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[4].addEventListener("click", () => {
  const menu = document.getElementById("list5");
  const arrow = document.querySelector(".arrow5");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

/* fetch('data.json').then(function(response)) {
  console.log(response);
  return response;
} */
