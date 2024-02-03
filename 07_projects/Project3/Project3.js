const clock = document.getElementById('clock');
const dates = document.getElementById('date');
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleDateString();
  dates.innerHTML = date.toLocaleTimeString();
}, 1000);
