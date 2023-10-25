//game body
let board = document.querySelector(".game");

// result
let result = document.querySelector("#result");

// score
let score = document.querySelector("#score");

// high score
let highScore = document.querySelector("#highScore");

// guess input
const guessNumber = document.querySelector("#guess");
guessNumber.value = "";
let answer = document.querySelector("#answer");
randomNumber = generateNumber();

// generate random number
function generateNumber() {
  return Math.round(Math.random() * 20);
}

// try again button
let tryAgainBtn = document.querySelector("#tryAgain");
document.querySelector("#tryAgain").addEventListener("click", () => {
  randomNumber = generateNumber();
  answer.textContent = "?";
  score.textContent = "9";
  guessNumber.style.display = "block";
  guessNumber.value = "";
  checkBtn.style.display = "block";
  board.style.backgroundColor = "white";
  result.textContent = "*Please choose a number";
});

// check button
let checkBtn = document.querySelector("#check");
document.querySelector("#check").addEventListener("click", () => {
  if (!guessNumber.value) {
    result.textContent = "*Please choose a number";
    result.style.color = "red";
  } else if (guessNumber.value == randomNumber) {
    result.textContent = "Bravo.";
    answer.textContent = randomNumber;
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }

    board.style.backgroundColor = "seagreen";
    checkBtn.style.display = "none";
    guessNumber.style.display = "none";
    tryAgainBtn.style.backgroundColor = "white";
  } else if (guessNumber.value > randomNumber) {
    result.textContent = "Very High";
    score.textContent--;
  } else if (guessNumber.value < randomNumber) {
    result.textContent = "Very Low";
    score.textContent--;
  }
  guessNumber.value = "";
});
