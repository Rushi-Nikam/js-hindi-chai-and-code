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
