var novoCalculo = false;

function insert(num) {
    var resultado = document.getElementById('resultado');

    if (novoCalculo) {
        if (num === '+' || num === '-' || num === '*' || num === '/') {
            resultado.innerHTML += num; // Permite continuar operação
        } else {
            resultado.innerHTML = num; // Substitui pelo novo número
        }
        novoCalculo = false;
    } else {
        resultado.innerHTML += num;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
    novoCalculo = false;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
            novoCalculo = true; // Ativa flag para reiniciar ou continuar cálculo
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Sem função';
    }
}
