const inputNum = document.querySelector('.input-box input');
const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.input-box a');
const myForm = document.querySelector('form');
const levelContainer = document.querySelector('.level-container');
const settingIcon = document.querySelector('.setting-icon');
const spanPercent = document.querySelector('.loader-container span');
const settingHeaderText = document.querySelector('.setting-header-text');
let guessRange = 100;
let randomNumber = loadNumber(guessRange);
let isExpanded = false;

function loadNumber(range) {
    const randomNum = Math.floor(Math.random() * (range - 1));
    console.log("Range:" + range);
    console.log("Load Number" + randomNum);
    return randomNum;
}

function getPercentage(userNum, guessNum) {
    return guessNum > userNum ? Math.floor(userNum * 100 / guessNum) : Math.floor(guessNum * 100 / userNum);
}

settingIcon.addEventListener('click', (e) => {
    if (isExpanded) {
        levelContainer.style.padding = '0';
        levelContainer.style.height = '0';
        settingIcon.style.transform = 'rotateX(360deg)';
        settingIcon.className = "fa-solid fa-gear setting-icon";
        isExpanded = !isExpanded;
    }
    else {
        levelContainer.style.height = '100%';
        levelContainer.style.padding = '3rem 0';
        settingIcon.style.transform = 'rotateX(-360deg)';
        settingIcon.className = "fa-solid fa-xmark setting-icon";
        isExpanded = !isExpanded;
    }
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNum.value) {
        const guessPercent = getPercentage(+inputNum.value, randomNumber);
        spanPercent.textContent = guessPercent + "% closer";
        loader.style.width = `${guessPercent}%`;
        loader.style.background = '#000';
        console.log("Random Number:" + randomNumber);
        console.log(guessPercent);
        if (guessPercent == 100) {
            randomNumber = loadNumber(guessRange);
            console.log("Random Number:" + randomNumber);
            loader.style.background = '#0ee936';
            spanPercent.textContent = "Congratulation!!!";
            inputNum.value = '';
        }
    }
});

levelContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const myValue = e.target.textContent;
    if (myValue == "Easy") {
        guessRange = 100;
        randomNumber = loadNumber(guessRange);
        settingHeaderText.textContent = myValue;
        levelContainer.style.padding = '0';
        levelContainer.style.height = '0';
        settingIcon.style.transform = 'rotateX(360deg)';
        settingIcon.className = "fa-solid fa-gear setting-icon";
        inputNum.placeholder = "1 - 100";
        isExpanded = !isExpanded;
    }
    if (myValue == "Medium") {
        guessRange = 500;
        randomNumber = loadNumber(guessRange);
        settingHeaderText.textContent = myValue;
        levelContainer.style.padding = '0';
        levelContainer.style.height = '0';
        settingIcon.style.transform = 'rotateX(360deg)';
        settingIcon.className = "fa-solid fa-gear setting-icon";
        inputNum.placeholder = "1 - 500";
        isExpanded = !isExpanded;
    }
    if (myValue == "Hard") {
        guessRange = 1000;
        randomNumber = loadNumber(guessRange);
        settingHeaderText.textContent = myValue;
        levelContainer.style.padding = '0';
        levelContainer.style.height = '0';
        settingIcon.style.transform = 'rotateX(360deg)';
        settingIcon.className = "fa-solid fa-gear setting-icon";
        inputNum.placeholder = "1 - 1000";
        isExpanded = !isExpanded;
    }
})