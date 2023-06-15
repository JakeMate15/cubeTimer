var timerHtml = document.getElementById('timer');
var tiempoInicio;
var corriendo = false;
var idTiempo;

function toggleTimer() {
    if (corriendo) {
        corriendo = false;
        clearTimeout(idTiempo);
    } else {
        corriendo = true;
        tiempoInicio = Date.now();
        actualizaTiempo();
    }
}

function actualizaTiempo() {
    var tiempoActual = Date.now();
    var tiempoOcurrido = tiempoActual - tiempoInicio;
    var formatoTiempo = formatTime(tiempoOcurrido);
    timerHtml.textContent = formatoTiempo;

    if (corriendo) {
        idTiempo = setTimeout(actualizaTiempo, 2);
    }
}

function formatTime(time) {
    var milliseconds = Math.floor(time % 1000 / 100); 
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