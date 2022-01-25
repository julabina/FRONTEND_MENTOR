const bill = document.querySelector(".left__bill__cont__input");
const tipsAmount = document.querySelectorAll(".left__selectTips__cont__amount");
const customAmount = document.querySelector(".left__selectTips__cont__custom");
const nbrPeople = document.querySelector(".left__numberPeople__cont__input");
const tipPerPerson = document.querySelector(".right__tipAmount__numbers");  
const totalPerPerson = document.querySelector(".right__total__numbers");  
const resetBtn = document.querySelector(".right__resetBtn");
const errorInput = document.querySelector(".left__numberPeople__cont__input__error");
const errorMsg = document.querySelector(".left__numberPeople__top__error");

let tipResult = 0, totalResult ;
let billVal = 0, customVal = 0, nbrPeopleVal = 0, tipPercent = 0;

const calcul = () => {
    if (nbrPeople.value === "0" || nbrPeople.value === "") {
        errorInput.classList.remove("left__numberPeople__cont__input__error--off");
        errorMsg.classList.remove("left__numberPeople__top__error--off");
        totalResult = 0;
        tipPerPerson.textContent = "$0.00" ;
        totalPerPerson.textContent = "$0.00";
        display();
    } else {
        errorInput.classList.add("left__numberPeople__cont__input__error--off");
        errorMsg.classList.add("left__numberPeople__top__error--off");
        tipResult = Math.round(((billVal / 100) * tipPercent) * 100) / 100;
        totalResult = Math.round(((billVal / nbrPeopleVal) + tipResult) * 100) / 100;
        display();
    }
}

const display = () => {
    if (totalResult === 0) {
        resetBtn.classList.remove("right__resetBtn--notEmpty");
    } else {
        resetBtn.classList.add("right__resetBtn--notEmpty");
        tipPerPerson.textContent = "$" + tipResult.toFixed(2);
        totalPerPerson.textContent = "$" + totalResult.toFixed(2);
    }
}

const resetSelectedAmount = () => {
    for (let i = 0; i < tipsAmount.length; i++) {
        tipsAmount[i].classList.remove("left__selectTips__cont__amount--selected");
    }
}

bill.addEventListener("input", (e) => {
    if (bill.value === "") {
        billVal = 0;
    } else {
        billVal = parseFloat(e.target.value);
    }
    calcul();
})

customAmount.addEventListener("input", (e) => {
    resetSelectedAmount();
    if (customAmount.value === "") {
        customVal = 0;
        tipPercent = 0;
    } else  {
        customVal = parseFloat(e.target.value);
        tipPercent = customVal;
    }
    calcul();
})

nbrPeople.addEventListener("input", (e) => {
    nbrPeopleVal = parseFloat(e.target.value);
    calcul();
})

tipsAmount[0].addEventListener("click", () => {
    customVal = 0;
    customAmount.value = "";
    if (tipsAmount[0].classList.contains("left__selectTips__cont__amount--selected")) {
        tipsAmount[0].classList.remove("left__selectTips__cont__amount--selected");
        tipPercent = 0;
    } else {
        resetSelectedAmount();
        tipsAmount[0].classList.add("left__selectTips__cont__amount--selected");
        tipPercent = 5;
    }
    calcul();
})

tipsAmount[1].addEventListener("click", () => {
    customVal = 0;
    customAmount.value = "";
    if (tipsAmount[1].classList.contains("left__selectTips__cont__amount--selected")) {
        tipsAmount[1].classList.remove("left__selectTips__cont__amount--selected");
        tipPercent = 0;
    } else {
        resetSelectedAmount();
        tipsAmount[1].classList.add("left__selectTips__cont__amount--selected");
        tipPercent = 10;
    }
    calcul();
})

tipsAmount[2].addEventListener("click", () => {
    customVal = 0;
    customAmount.value = "";
    if (tipsAmount[2].classList.contains("left__selectTips__cont__amount--selected")) {
        tipsAmount[2].classList.remove("left__selectTips__cont__amount--selected");
        tipPercent = 0;
    } else {
        resetSelectedAmount();
        tipsAmount[2].classList.add("left__selectTips__cont__amount--selected");
        tipPercent = 15;
    }
    calcul();
})

tipsAmount[3].addEventListener("click", () => {
    customVal = 0;
    customAmount.value = "";
    if (tipsAmount[3].classList.contains("left__selectTips__cont__amount--selected")) {
        tipsAmount[3].classList.remove("left__selectTips__cont__amount--selected");
        tipPercent = 0;
    } else {
        resetSelectedAmount();
        tipsAmount[3].classList.add("left__selectTips__cont__amount--selected");
        tipPercent = 25;
    }
    calcul();
})

tipsAmount[4].addEventListener("click", () => {
    customVal = 0;
    customAmount.value = "";
    if (tipsAmount[4].classList.contains("left__selectTips__cont__amount--selected")) {
        tipsAmount[4].classList.remove("left__selectTips__cont__amount--selected");
        tipPercent = 0;
    } else {
        resetSelectedAmount();
        tipsAmount[4].classList.add("left__selectTips__cont__amount--selected");
        tipPercent = 50;
    }
    calcul();
})

resetBtn.addEventListener("click", () => {
    if (resetBtn.classList.contains("right__resetBtn--notEmpty")) {
        resetSelectedAmount();
        bill.value = "";
        billVal = 0;
        customAmount.value = "";
        customVal = 0;
        nbrPeople.value = "";
        nbrPeopleVal = 0;
        resetBtn.classList.remove("right__resetBtn--notEmpty");
        calcul();
        errorInput.classList.add("left__numberPeople__cont__input__error--off");
        errorMsg.classList.add("left__numberPeople__top__error--off");
    }
})