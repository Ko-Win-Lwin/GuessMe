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
let secretNumber = document.querySelector("#secretNumber");
randomNumber = generateNumber();

// generate random number
function generateNumber() {
  return Math.round(Math.random() * 20);
}

// try again button
let tryAgainBtn = document.querySelector("#tryAgain");

tryAgainBtn.addEventListener("click", () => {
  randomNumber = generateNumber();
  guessNumber.value = "";
  secretNumber.textContent = "?";
  score.textContent = "9";
  guessNumber.style.display = "block";
  checkBtn.style.display = "block";

  result.textContent = "*Please choose a number";
  board.style.backgroundColor = "#bcd0b5";
});

// check button
let checkBtn = document.querySelector("#check");
checkBtn.addEventListener("click", () => {
  result.style.color = "black";
  // if not valid input
  if (!guessNumber.value) {
    result.textContent = "*Please choose a number";
    result.style.color = "red";
  }
  // check for win
  else if (guessNumber.value == randomNumber) {
    win();
  }
  // check answer greater than or less than secret number
  else if (
    guessNumber.value > randomNumber
      ? (result.textContent = "Very High")
      : (result.textContent = "Very Low")
  ) {
    score.textContent--;
    checkScore();
  }
  guessNumber.value = "";
});

// win
function win() {
  result.textContent = "Bravo.";
  secretNumber.textContent = randomNumber;
  if (score.textContent > highScore.textContent) {
    highScore.textContent = score.textContent;
  }

  board.style.backgroundColor = "seagreen";
  checkBtn.style.display = "none";
  guessNumber.style.display = "none";
  tryAgainBtn.style.backgroundColor = "white";
  tryAgainBtn.style.color = "#075265";
}

//check score
function checkScore() {
  if (score.textContent == 0) {
    result.textContent = "You lose.";
    board.style.backgroundColor = "#E44950";
    checkBtn.style.display = "none";
    guessNumber.style.display = "none";
    tryAgainBtn.style.backgroundColor = "white";
    tryAgainBtn.style.color = "#075265";
  }
}
