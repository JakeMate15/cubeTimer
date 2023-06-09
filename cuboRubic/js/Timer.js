const timer = document.getElementById('timer');
const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');
const timer4 = document.getElementById('timer4');
const timer5 = document.getElementById('timer5');

let posicion = 0;
let tiempo;
let activo = false; 
let tiempos = ["00:00.000","00:00.000","00:00.000","00:00.000","00:00.000"];


function startTimer() {
    let milisegundos = 0;

    tiempo = setInterval(() => {
        milisegundos += 10;
        timer.textContent = formatTime(milisegundos);
    }, 10); 

    activo = true;
}

function detener() {
    tiempos[posicion] = timer.textContent;
    posicion++;
    if (posicion > 4) {
        posicion = 0;
    }
    clearInterval(tiempo);
    activo = false;
    timer1.textContent = "Primer tiempo: "+tiempos[0];
    timer2.textContent = "Segundo tiempo: "+tiempos[1];
    timer3.textContent = "Tercer tiempo: "+tiempos[2];
    timer4.textContent = "Cuarto tiempo: "+tiempos[3];
    timer5.textContent = "Quinto tiempo: "+tiempos[4];
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
