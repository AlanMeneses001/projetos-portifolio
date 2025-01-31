let real = document.getElementById('real');
let dolar = document.getElementById("convertido");


function converter(){
    let valorReal = parseFloat(real.value); // Converte a string para número

    if (!isNaN(valorReal)) { // Verifica se o valor digitado é um número válido
        dolar.value = (valorReal / 5.87).toFixed(2); // Converte para 2 casas decimais
    } else {
        dolar.value = "Valor inválido"; // Mensagem de erro se o input não for número
    }
}

