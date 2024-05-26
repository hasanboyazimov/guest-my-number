const numberBox = document.querySelector("#number-box");
const checkInput = document.querySelector("#check-input");
const checkButton = document.querySelector("#check-button");
const infoText = document.querySelector("#info-text");
const recordText = document.querySelector("#record-text");
const attemsText = document.querySelector("#attems-text");
const body = document.querySelector("body");
const eventsBox = document.querySelector("#events-box");
const btnDecor = document.querySelector("#btn-decor");

const randomNumner = Math.floor(Math.random() * 20 + 1);
let attems = 10;
let record = 0;

function disabled() {
  checkInput.setAttribute("disabled", true);
  checkButton.setAttribute("disabled", true);
}

function addGreen() {
  numberBox.classList.add("bg-green-100");
  eventsBox.classList.add("bg-green-100");
  body.classList.add("bg-green-100");
}

function addRed() {
  body.classList.add("bg-red-100");
  numberBox.classList.add("bg-red-100");
  eventsBox.classList.add("bg-red-100");
}

function correctAnswer() {
  infoText.textContent = `siz to'g'ri topdingiz 😎`;
  btnDecor.classList.add("pulse-green");
  new Audio("./soundEffects/brass.mp3").play();
  numberBox.textContent = randomNumner;
  addGreen();
  disabled();
  if (attems > record) {
    record = attems
    recordText.textContent = `Record: ${attems}`;
  }
}

function incorrectAnswer() {
  infoText.textContent = `you lose 😥`;
  btnDecor.classList.add("pulse-red");
  new Audio("./soundEffects/fail.mp3").play();
  numberBox.textContent = randomNumner;
  addRed();
  disabled();
}

function attemsMinus() {
  attems -= 1;
  attemsText.textContent = `Attems: ${attems}`;
}

function checkNum() {
  new Audio("./soundEffects/button.mp3").play();
  if (checkInput.value == "") {
    console.log("Error");
  } else {
    if (attems > 0) {
      if (checkInput.value > randomNumner) {
        infoText.textContent = "bu son katta";
        attemsMinus();
      } else if (checkInput.value < randomNumner) {
        infoText.textContent = "bu son kichkina";
        attemsMinus();
      } else {
        correctAnswer();
      }
    } else {
      incorrectAnswer();
    }
  }
}

function playGame() {
  checkButton.addEventListener("click", checkNum);
  document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      checkNum();
    }
  });
  btnDecor.addEventListener("click", () => {
    playGame()
  });
}

playGame();
console.log(randomNumner);
