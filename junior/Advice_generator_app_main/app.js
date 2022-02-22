const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const diceBtn = document.querySelector(".dice");

const newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        adviceId.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })
}

diceBtn.addEventListener("click", () => {
    newAdvice();
})

newAdvice();