// const dayEl = document.getElementById("day");
// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minute");
// const secondEl = document.getElementById("second");
// const countDownDate = new Date("jan 1, 2023 00:00:00").getTime();
// let todaysDate = new Date().getTime();

// console.log(countDownDate);

// console.log(todaysDate);

// let x = setInterval(function () {
//   let distance = countDownDate - todaysDate;
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("day").textContent = days;
//   document.getElementById("hour").textContent = hours;
//   document.getElementById("minute").textContent = minutes;
//   document.getElementById("second").textContent = seconds;
// }, 1000);

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const newYearDate = new Date("jan 1, 2023 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(updateCountdown, 1000);
}
