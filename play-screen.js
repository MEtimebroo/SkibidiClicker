const score = document.getElementById("score");
const plus1 = document.getElementById("plus-1");
const tenPer = document.getElementById("10-per");
const thirtyPer = document.getElementById("30-per");
const eightyPer = document.getElementById("80-per");
const twoPer = document.getElementById("200-per");
const fivePer = document.getElementById("500-per");
const thouPer = document.getElementById("1000-per");
const twelPer = document.getElementById("1200-per");
const reset = document.getElementById("reset");
let scoreNum = 0;
score.innerText = scoreNum;

let tenInt = [];
let thirtyInt = [];
let eightyInt = [];
let twoInt = [];
let fiveInt = [];
let thouInt = [];
let twelInt = [];

function updateButtons() {
    if (scoreNum >= 10) {
        tenPer.style.display = "block";
    } else {
        tenPer.style.display = "none";
    }

    if (scoreNum >= 30) {
        thirtyPer.style.display = "block";
    } else {
        thirtyPer.style.display = "none";
    }

    if (scoreNum >= 80) {
        eightyPer.style.display = "block";
    } else {
        eightyPer.style.display = "none";
    }

    if (scoreNum >= 200) {
        twoPer.style.display = "block";
    } else {
        twoPer.style.display = "none";
    }

    if (scoreNum >= 500) {
        fivePer.style.display = "block";
    } else {
        fivePer.style.display = "none";
    }

    if (scoreNum >= 1000) {
        thouPer.style.display = "block";
    } else {
        thouPer.style.display = "none";
    }

    if (scoreNum >= 1200) {
        twelPer.style.display = "block";
    } else {
        twelPer.style.display = "none";
    }
}

updateButtons();

plus1.addEventListener("click", function() {
    scoreNum++;
    score.innerText = scoreNum;
    updateButtons();
})

tenPer.addEventListener("click", function() {
    scoreNum -= 10;
    score.innerText = scoreNum;
    updateButtons();
    const newTenInt = setInterval(function() {
        scoreNum++;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    tenInt.push(newTenInt);
})

thirtyPer.addEventListener("click", function() {
    scoreNum -= 30;
    score.innerText = scoreNum;
    updateButtons();
    const newThirtyInt = setInterval(function() {
        scoreNum += 5;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    thirtyInt.push(newThirtyInt);
})

eightyPer.addEventListener("click", function() {
    scoreNum -= 80;
    score.innerText = scoreNum;
    updateButtons();
    const newEightyInt = setInterval(function() {
        scoreNum += 10;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    eightyInt.push(newEightyInt);
})

twoPer.addEventListener("click", function() {
    scoreNum -= 200;
    score.innerText = scoreNum;
    updateButtons();
    const newTwoInt = setInterval(function() {
        scoreNum += 30;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    twoInt.push(newTwoInt);
})

fivePer.addEventListener("click", function() {
    scoreNum -= 500;
    score.innerText = scoreNum;
    updateButtons();
    const newFiveInt = setInterval(function() {
        scoreNum += 60;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    fiveInt.push(newFiveInt);
})

thouPer.addEventListener("click", function() {
    scoreNum -= 1000;
    score.innerText = scoreNum;
    updateButtons();
    const newThouInt = setInterval(function() {
        scoreNum += 120;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    thouInt.push(newThouInt);
})

twelPer.addEventListener("click", function() {
    scoreNum -= 1200;
    score.innerText = scoreNum;
    updateButtons();
    const newTwelInt = setInterval(function() {
        scoreNum += 150;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    twelInt.push(newTwelInt);
})

reset.addEventListener("click", function() {
    scoreNum = 0;
    score.innerText = scoreNum;
    updateButtons();
    
    tenInt.forEach(interval => clearInterval(interval));
    thirtyInt.forEach(interval => clearInterval(interval));
    eightyInt.forEach(interval => clearInterval(interval));
    twoInt.forEach(interval => clearInterval(interval));
    fiveInt.forEach(interval => clearInterval(interval));
    thouInt.forEach(interval => clearInterval(interval));
    twelInt.forEach(interval => clearInterval(interval));

    tenInt = [];
    thirtyInt = [];
    eightyInt = [];
    twoInt = [];
    fiveInt = [];
    thouInt = [];
    twelInt = [];
})
