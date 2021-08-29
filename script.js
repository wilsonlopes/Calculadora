let operador = ""
let resultado = 0;
let valor1 = ""
let valor2 = ""

function manipulaTecla (tecla) {
    if (!operador && tecla !== '-' && tecla !== '+' && tecla  !== 'x' && tecla !== '/' ) {
        valor1 = String(valor1) + String(tecla)
        document.getElementById("visor").innerHTML = valor1;
    } else if (valor1 && (tecla === '-' || tecla === '+' || tecla  === 'x' || tecla === '/')) {
        operador = tecla;
        document.getElementById("visor").innerHTML = tecla;

        if (valor1 && valor2) {
            valor1 = fazOperacao(operador, valor1, valor2);
            valor2 = "";
        }
     } else if (operador && valor1) {
        valor2 = String(valor2) + String(tecla);
        document.getElementById("visor").innerHTML = valor2;
     }
}


function limparCalculadora () {
    visorCalculo = ""
    document.getElementById("visor").innerHTML = visorCalculo;
}

function fazOperacao (op, v1, v2) {
    if (op === '+') {
        return Number(v1) + Number(v2);
    }
    if (op === '-') {
        return Number(v1) - Number(v2);
    }
    if (op === 'x') {
        return Number(v1) * Number(v2);
    }
    if (op === '/') {
        return Number(v1) / Number(v2);
    }
}

function calcular () {
    if(valor1 && valor2) {
        resultado = Number(fazOperacao(operador, valor1, valor2));
        valor1 = String(resultado);
        valor2 = "";
        document.getElementById("visor").innerHTML = resultado;

    }
}