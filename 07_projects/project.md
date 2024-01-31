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
