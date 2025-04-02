var novoCalculo = false;

function insert(num) {
    var resultado = document.getElementById('resultado');

    if (novoCalculo) {
        // Se o novo input for um operador, continuar o cálculo
        if (num === '+' || num === '-' || num === '*' || num === '/') {
            resultado.innerHTML += num;
        } else {
            resultado.innerHTML = num; // Se for um número, substitui o resultado anterior
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
            novoCalculo = true; // Agora ativa a flag para reiniciar o cálculo corretamente
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Sem função';
    }
}
