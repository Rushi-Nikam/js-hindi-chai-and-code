let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let playGame = true;
let numGuess = 1;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number are ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You are guess is right ${random}`);
    endGame();
  } else if (guess < random) {
    displayMessage(`You are guess is lower than number`);
  } else if (guess > random) {
    displayMessage(`You are guess is bigger than number`);
  }
}
function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  UserInput.innerHTML = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="StartNew">start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startNew();
}
function startNew() {
  const StartNewButton = document.querySelector('#StartNew');
  StartNewButton.addEventListener('click', (e) => {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}
