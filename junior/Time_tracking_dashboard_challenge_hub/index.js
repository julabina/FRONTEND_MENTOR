const menus = document.querySelectorAll(".menu");
const currentDatas = document.querySelectorAll(".currentData");
const previousDatas = document.querySelectorAll(".previousData");

let datas;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    datas = data;
    displayStats();
  });

const displayStats = () => {
  if (menus[0].classList.contains("selected")) {
    for (let i = 0; i < currentDatas.length; i++) {
      currentDatas[i].textContent = datas[i].timeframes.daily.current + "hrs";
      previousDatas[i].textContent =
        "Last Day - " + datas[i].timeframes.daily.previous + "hrs";
    }
  } else if (menus[1].classList.contains("selected")) {
    for (let i = 0; i < currentDatas.length; i++) {
      currentDatas[i].textContent = datas[i].timeframes.weekly.current + "hrs";
      previousDatas[i].textContent =
        "Last Week - " + datas[i].timeframes.weekly.previous + "hrs";
    }
  } else {
    for (let i = 0; i < currentDatas.length; i++) {
      currentDatas[i].textContent = datas[i].timeframes.monthly.current + "hrs";
      previousDatas[i].textContent =
        "Last Month - " + datas[i].timeframes.monthly.previous + "hrs";
    }
  }
};

menus[0].addEventListener("click", () => {
  menus[0].classList.add("selected");
  menus[1].classList.remove("selected");
  menus[2].classList.remove("selected");
  displayStats();
});

menus[1].addEventListener("click", () => {
  menus[1].classList.add("selected");
  menus[0].classList.remove("selected");
  menus[2].classList.remove("selected");
  displayStats();
});

menus[2].addEventListener("click", () => {
  menus[2].classList.add("selected");
  menus[0].classList.remove("selected");
  menus[1].classList.remove("selected");
  displayStats();
});
