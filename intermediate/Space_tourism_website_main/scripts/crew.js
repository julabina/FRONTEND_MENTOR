const roleC = document.querySelector(".crewGrade");
const nameC = document.querySelector(".crewName");
const descriptionC = document.querySelector(".crewDescription");
const imgC = document.querySelector(".crewPhotoContainer");
const crews = document.querySelectorAll(".crewNav-nav");

let datasC;

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    datasC = data;
    console.log(data.crew[0].images.png);
    displayCrew();
  });

function resetCrews() {
  for (let i = 0; i < crews.length; i++) {
    crews[i].classList.remove("crewNavSelected");
  }
}

function displayCrew() {
  for (let i = 0; i < crews.length; i++) {
    if (crews[i].classList.contains("crewNavSelected")) {
      roleC.textContent = datasC.crew[i].role;
      nameC.textContent = datasC.crew[i].name;
      descriptionC.textContent = datasC.crew[i].bio;
      imgC.innerHTML = `
      <img src="${datasC.crew[i].images.png}" alt="Picture of ${datasC.crew[i].name}">
      `;
    }
  }
}

crews[0].addEventListener("click", () => {
  resetCrews();
  crews[0].classList.add("crewNavSelected");
  displayCrew();
});

crews[1].addEventListener("click", () => {
  resetCrews();
  crews[1].classList.add("crewNavSelected");
  displayCrew();
});

crews[2].addEventListener("click", () => {
  resetCrews();
  crews[2].classList.add("crewNavSelected");
  displayCrew();
});

crews[3].addEventListener("click", () => {
  resetCrews();
  crews[3].classList.add("crewNavSelected");
  displayCrew();
});
