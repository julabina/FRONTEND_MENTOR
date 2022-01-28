const input = document.querySelector(".shortener__imgCont__container__inputCont__input");
const submitBtn = document.querySelector(".shortener__imgCont__container__btn");
const shortLinkContainer = document.querySelector(".shortLinkContainer");
const errorSpan = document.querySelector(".shortener__imgCont__container__inputCont__error"); 

let links = [];let t = false;

const verifyLink = () => {
    if (input.value === "") {
        input.classList.add("shortener__imgCont__container__inputCont__input--error");
        errorSpan.textContent = 'Please add a link';
    } else if (input.value.match(/[.]/gm)) {
        input.classList.remove("shortener__imgCont__container__inputCont__input--error");
        errorSpan.textContent = '';
        shortening();
    } else {
        input.classList.add("shortener__imgCont__container__inputCont__input--error");
        errorSpan.textContent = 'Invalid link';
    }
}

const verifySessionStorage = () => {
    if (sessionStorage.getItem('links short')) {
    let retrieveDatas = sessionStorage.getItem("links short");
    let a = JSON.parse(retrieveDatas);
    links = a;
    displayLinks();
    }
}

const shortening = () => {
    fetch("https://api.shrtco.de/v2/shorten?url=" + input.value).then(res => res.json()).then(data => {
       let datas = data;
        if (datas.ok === true) {
            let arr = [datas.result.original_link, datas.result.short_link3];
            links.push(arr);
            sessionStorage.setItem("links short", JSON.stringify(links));
            input.value = "";
            displayLinks();
        }
    })
}

const displayLinks = () => {
    shortLinkContainer.innerHTML = ``;
    for (let i = 0; i < links.length; i++) {   
            shortLinkContainer.innerHTML += `
                <div class="shortLinkContainer__bloc">
                  <p class="shortLinkContainer__bloc__original">${links[i][0]}</p>
                  <div class="shortLinkContainer__bloc__shortLink">
                    <p class="shortLinkContainer__bloc__shortLink__short">${links[i][1]}</p>
                    <button class="shortLinkContainer__bloc__shortLink__btn">copy</button>
                  </div>
                </div>
            `
    }



}

verifySessionStorage();

submitBtn.addEventListener("click", () => {
    verifyLink();
})