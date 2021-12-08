const pictureM = document.querySelector(".imgContainerDestin");
const nameM = document.querySelector(".moonName");
const descriptionM = document.querySelector(".moonDescription");
const distanceM = document.querySelector(".moonDistance");
const travelTimeM = document.querySelector(".moonTravelTime");
const moons = document.querySelectorAll(".moonNav-p");

let datas;

fetch("../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    datas = data;
    displayMoons();
  });

const resetMoonsSelected = () => {
  for (let i = 0; i < moons.length; i++) {
    moons[i].classList.remove("moonSelected");
  }
};

const displayMoons = () => {
  for (let i = 0; i < moons.length; i++) {
    if (moons[i].classList.contains("moonSelected")) {
      nameM.textContent = datas.destinations[i].name;
      descriptionM.textContent = datas.destinations[i].description;
      distanceM.textContent = datas.destinations[i].distance;
      travelTimeM.textContent = datas.destinations[i].travel;
      pictureM.innerHTML = `
      <img src="${datas.destinations[i].images.webp}" alt="picture of ${datas.destinations[i].name}">
      `;
    }
  }
};

moons[0].addEventListener("click", () => {
  resetMoonsSelected();
  moons[0].classList.add("moonSelected");
  displayMoons();
});

moons[1].addEventListener("click", () => {
  resetMoonsSelected();
  moons[1].classList.add("moonSelected");
  displayMoons();
});

moons[2].addEventListener("click", () => {
  resetMoonsSelected();
  moons[2].classList.add("moonSelected");
  displayMoons();
});

moons[3].addEventListener("click", () => {
  resetMoonsSelected();
  moons[3].classList.add("moonSelected");
  displayMoons();
});
