function atualizarRelogio(){
    let tempoReal = new Date();
    let horas = tempoReal.getHours();
    let minutos = tempoReal.getMinutes();
    let segundos = tempoReal.getSeconds();

    function twoDigits(digit){
        return digit < 10 ? '0' + digit : digit;
    }

    document.getElementById('timer').innerText = `${twoDigits(horas)}:${twoDigits(minutos)}:${twoDigits(segundos)}`
}


// Atualiza o relógio a cada 1 segundo
setInterval(atualizarRelogio, 1000);


// Chama a função uma vez para exibir o horário imediatamente ao carregar a página
atualizarRelogio();