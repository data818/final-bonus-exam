// TIMER;
let timeLeft = 15;
const timerElement = document.getElementById("timer");
// functions
function updateTimer() {
  if (timeLeft > 0) {
    timerElement.textContent =
      "Release in: 00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);
    timeLeft--;
  } else {
    clearInterval(countdown);
    timerElement.textContent = "Released";
    timerElement.className = "released";
  }
}

const countdown = setInterval(updateTimer, 1000);
