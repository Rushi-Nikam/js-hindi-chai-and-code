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
