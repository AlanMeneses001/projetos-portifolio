document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function multi() {
    display.value += " x ";

}

function divisao() {
    display.value += " / ";
}

function menos() {
    display.value += " - ";
}

function mais() {
    display.value += " + ";
}

function calculate() {
    try {
        // Substitui "x" por "*" para que o eval entenda como multiplicação
        let expression = display.value.replace(/x/g, "*");

        // Avalia a expressão com o operador correto "*"
        display.value = eval(expression);
    } catch (e) {
        display.value = "Erro";
    }
}