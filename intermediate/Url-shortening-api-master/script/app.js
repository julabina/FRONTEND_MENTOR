const input = document.querySelector(".shortener__imgCont__container__inputCont__input");
const submitBtn = document.querySelector(".shortener__imgCont__container__btn");
const shortLinkContainer = document.querySelector(".shortLinkContainer");
const errorSpan = document.querySelector(".shortener__imgCont__container__inputCont__error"); 
const menu = document.querySelector(".menu");
const hambBtn = document.querySelector(".menuHamburger__cont");

links = [];let t = false;

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
            let arr = [datas.result.original_link, datas.result.short_link3, false];
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
        let id = "short" + (i + 1); 
        let idBtn = "btn" + (i + 1);
        let cop = "copy(" + id + ", " + idBtn + ", " + i + ")"; 
        if (links[i][2] === true) {
            shortLinkContainer.innerHTML += `
            <div class="shortLinkContainer__bloc">
            <p class="shortLinkContainer__bloc__original">${links[i][0]}</p>
            <div class="shortLinkContainer__bloc__shortLink">
            <p class="shortLinkContainer__bloc__shortLink__short" id=${id}>${links[i][1]}</p>
            <button class="shortLinkContainer__bloc__shortLink__btn shortLinkContainer__bloc__shortLink__btn--copied" id=${idBtn} onClick='${cop}'>Copied!</button>
            </div>
            </div>
            `
        } else {
        shortLinkContainer.innerHTML += `
        <div class="shortLinkContainer__bloc">
        <p class="shortLinkContainer__bloc__original">${links[i][0]}</p>
        <div class="shortLinkContainer__bloc__shortLink">
        <p class="shortLinkContainer__bloc__shortLink__short" id=${id}>${links[i][1]}</p>
        <button class="shortLinkContainer__bloc__shortLink__btn" id=${idBtn} onClick='${cop}'>Copy</button>
        </div>
        </div>
        `
        }
    }
}

const copy = (id, btn, ind) => {
    let toCopy = id.textContent;
    navigator.clipboard.writeText(toCopy);
    if (!btn.classList.contains("shortLinkContainer__bloc__shortLink__btn--copied")) {
        btn.textContent = "Copied!";
        btn.classList.add("shortLinkContainer__bloc__shortLink__btn--copied");
        links[ind][2] = true;
        sessionStorage.setItem("links short", JSON.stringify(links)); 
    } 
}

verifySessionStorage();

submitBtn.addEventListener("click", (e) => {
    verifyLink();
    e.preventDefault();
})

hambBtn.addEventListener("click", () => {
    if (menu.classList.contains("menu--off")) {
        menu.classList.remove("menu--off");
    } else {
        menu.classList.add("menu--off");
    }
})