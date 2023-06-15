var timerElement = document.getElementById('timer');
var startTime;
var running = false;
var timeoutId;

function toggleTimer() {
if (running) {
    running = false;
    clearTimeout(timeoutId);
} else {
    running = true;
    startTime = Date.now();
    updateTimer();
}
}

function updateTimer() {
var currentTime = Date.now();
var elapsedTime = currentTime - startTime;
var formattedTime = formatTime(elapsedTime);
timerElement.textContent = formattedTime;

if (running) {
    timeoutId = setTimeout(updateTimer, 2);
}
}

function formatTime(time) {
var milliseconds = Math.floor(time % 1000 / 100); // Obtiene el primer dígito de los milisegundos
var seconds = Math.floor(time / 1000) % 60;
var minutes = Math.floor(time / 1000 / 60);

var timeString = '';

if (minutes > 0) {
    timeString += padZero(minutes, 2) + ':';
}

timeString += padZero(seconds, 2) + '.' + milliseconds;

return timeString;
}

function padZero(num, width) {
var numString = num.toString();
while (numString.length < width) {
    numString = '0' + numString;
}
return numString;
}

document.addEventListener('keydown', function(event) {
if (event.code === 'Space') {
    event.preventDefault();
    toggleTimer();
}
});