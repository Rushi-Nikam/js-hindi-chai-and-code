## Project related to DOM

## project 1

```javascript
console.log('rushi');
const Button = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(Button);
Button.forEach((button) => {
  //  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event.target.id);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```
## Project 2 
```javascript

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `${BMI}`;
    if (BMI <= 18) {
      results.innerHTML = `You are under weight your bmi is ${BMI}`;
    } else if (BMI >= 20) {
      results.innerHTML = `You are in normal range  bmi is ${BMI}`;
    } else {
      results.innerHTML = `You are overweight ${BMI}`;
    }
  }
});

```
## Project 3
```javascript
const clock = document.getElementById('clock');
const dates = document.getElementById('date');
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleDateString();
  dates.innerHTML = date.toLocaleTimeString();
}, 1000);


```
## project 4
```javascript

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

```
## Project 5
```javascript
 
 console.log('Project 5');
const insert = document.getElementById('insert');

window.addEventListener('keydown' , (e) =>{
  insert.innerHTML=`<div class="color">
    
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>`
})
```
## Project 6
```javascript
const ramdomColor = function(){
    const hex = '0123456ABCDEF';
    let Color = "#";
    for(let i=0;i< 6;i++ ){
     Color += hex[Math.floor(Math.random() * 16)]
    
    }
    return Color;
  };
  let changingcolor;
  const StartChaning = function(){
    if(!changingcolor){
      changingcolor =  setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
      
      document.body.style.backgroundColor = ramdomColor();
    }
    
  }
  const stopChaning= function(){
    clearInterval(changingcolor)
    changingcolor = null;
  }
  document.querySelector('#start').addEventListener('click',StartChaning);
  document.querySelector('#stop').addEventListener('click',stopChaning);
  
```