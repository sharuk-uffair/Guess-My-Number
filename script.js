'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}


document.querySelector('.check').addEventListener('click', function () {
    const guessEl = Number(document.querySelector('.guess').value);
    if (!guessEl) {
        displayMessage("⛔ No Number!");
    } else if (guessEl === secretNumber) {
        displayNumber(secretNumber);
        displayMessage("🎊 Correct Number");
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessEl !== secretNumber) {

        if (score > 1) {
            displayMessage(guessEl > secretNumber ? "📈 Too high." : "📉 Too low.");
            score--;
            displayScore(score);
        } else {
            displayMessage("👎 You lost the game!");
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start quessing...");
    displayScore(score); // score=20
    displayNumber('?');
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});