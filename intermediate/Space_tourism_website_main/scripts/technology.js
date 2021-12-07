const technoTitle = document.querySelector(".technologyTextTitle");
const technoText = document.querySelector(".technologyText");
const imgContainer = document.querySelector(".technologyPhotoContainer");
const techNavs = document.querySelectorAll(".techNav");

let dataT;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    dataT = data.technology;
    console.log(dataT);
    displayTechno();
  });

function displayTechno() {
  for (let i = 0; i < techNavs.length; i++) {
    if (techNavs[i].classList.contains("techNavSelected")) {
      technoTitle.textContent = dataT[i].name;
      technoText.textContent = dataT[i].description;
      imgContainer.innerHTML = `
            <img src="${dataT[i].images.portrait}" alt="picture of ${dataT[i].name}"> 
            `;
    }
  }
}

function resetTechnoSelected() {
  for (let i = 0; i < techNavs.length; i++) {
    techNavs[i].classList.remove("techNavSelected");
  }
}

techNavs[0].addEventListener("click", () => {
  resetTechnoSelected();
  techNavs[0].classList.add("techNavSelected");
  displayTechno();
});

techNavs[1].addEventListener("click", () => {
  resetTechnoSelected();
  techNavs[1].classList.add("techNavSelected");
  displayTechno();
});

techNavs[2].addEventListener("click", () => {
  resetTechnoSelected();
  techNavs[2].classList.add("techNavSelected");
  displayTechno();
});
