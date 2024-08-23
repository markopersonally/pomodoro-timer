let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const minutesTimer = document.getElementById("minutes");
const secondsTimer = document.getElementById("seconds");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const updateDisplay = () => {
  minutesTimer.textContent = String(minutes).padStart(2, "0");
  secondsTimer.textContent = String(seconds).padStart(2, "0");
};

const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  }
};

const pauseTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
