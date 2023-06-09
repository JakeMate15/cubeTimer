//Funciones referente al timer
var startTime, currentTime, interval;
var running = false;

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);

function startTimer() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
    running = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(interval);
    running = false;
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
  }
}

function updateTimer() {
  currentTime = Date.now() - startTime;
  var seconds = Math.floor(currentTime / 1000) % 60;
  var minutes = Math.floor(currentTime / 1000 / 60) % 60;
  var hours = Math.floor(currentTime / 1000 / 60 / 60);
  document.getElementById("timer").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

var button = document.getElementById("startButton");
button.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    event.preventDefault(); 
    button.click(); n
  }
});


