// Seção 5 - Aula 04 - Map
// Utilizamos o Map para realizar transformação em Array
// Mapeia cada um dos valores originais de um Array e faz a transformação indicada
// é gerado um novo Array com o tamanho do Array original
var valores = [2, 4, 6, 8, 10];

console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;
});

//console.log(dobro);

// Encadeando Maps para executar multiplas funções 
function dobrar(valor){
    return valor * 2;
}
function soma_4(valor){
    return valor + 4;
}

function dividir_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_5);

console.log(resultado);

/* 
Passo 1 - dobrar = [4, 8, 12, 16, 20]
Passo 2 - soma_4 = [8, 12, 16, 20, 24]
Passo 3 - dividir_5 = [1.6, 2.4, 3.2, 4, 4.8]
*/