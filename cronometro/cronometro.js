let horas = 0;
let minutos = 0;
let segundos = 0;

let intervalo;

function start(){
    intervalo = setInterval(counting, 1000);
}

function pause(){
    clearInterval(intervalo);
}

function stop() {
    clearInterval(intervalo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('counter').innerText = `${twoDigits(horas)}:${twoDigits(minutos)}:${twoDigits(segundos)}`;
}

function counting(){
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;

        if(minutos === 60){
            minutos = 0;
            horas++;
        }
    }

    document.getElementById('counter').innerText = `${twoDigits(horas)}:${twoDigits(minutos)}:${twoDigits(segundos)}`;

}

function twoDigits(digit){
    if (digit < 10){
        return ('0' + digit);
    } else {
        return (digit);
    }
}