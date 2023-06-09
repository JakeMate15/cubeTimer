const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timer = document.getElementById('timer');

let tiempo;
let activo = false; 

function startTimer() {
    let milisegundos = 0;

    tiempo = setInterval(() => {
        milisegundos += 10;
        timer.textContent = formatTime(milisegundos);
    }, 10); 

    activo = true;
    startButton.disabled = true;
    stopButton.disabled = false;
}

function detener() {
    clearInterval(tiempo);

    activo = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function formatTime(milisegundos) {
    const minutos = Math.floor((milisegundos % 3600000) / 60000).toString().padStart(2, '0');
    const segundos = Math.floor((milisegundos % 60000) / 1000).toString().padStart(2, '0');
    const ms = (milisegundos % 1000).toString().padStart(3, '0');

    return `${minutos}:${segundos}.${ms}`;
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {
        if (activo) {
            detener();
        } else {
            startTimer();
        }
    }
});

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);