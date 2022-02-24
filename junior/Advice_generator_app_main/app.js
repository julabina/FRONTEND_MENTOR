const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const diceBtn = document.querySelector(".dice");


const newAdvice = () => {
    // no cache for firefox
    fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    .then((res) => res.json())
    .then((data) => {
        console.log(data.slip.id);
        adviceId.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    }) 
}

diceBtn.addEventListener("click", () => {
    newAdvice(true);
})

newAdvice(true);