var novoCalculo = false;


function insert(num){

    var resultado = document.getElementById('resultado');

    if(novoCalculo){
        resultado.innerHTML = num; //substitui o resultado anterior
        novoCalculo = false; // reseta a variavel para permitir novas inserçoes
    } else {
        resultado.innerHTML += num;
    }

}

function clean(){
    document.getElementById('resultado').innerHTML = '';
    novoCalculo = false;
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
            novoCalculo = true; // Ativa a flag para limpar na próxima inserção
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = 'sem função';
    }
}


