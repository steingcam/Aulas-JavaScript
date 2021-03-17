//Seção 5 - Aula 6 - Reduce
// Usado com o Map e o Filter
// Tem a função de reduzir um array em um unico valor

function somar(anterior, atual){
    return anterior + atual;
}
var preços = [ 4.66, 3.78, 9.78, 1.34, 5.32];

var ret = preços.reduce(somar);

console.log(ret);

/*
Como funciona o reduce?
[ 4.66, 3.78, 9.78, 1.34, 5.32]
Primeira execução:
    - Pega os dois primeiros valores (indice 0 e indice 1), soma e retorna o resultado
Nas demais execuções:
    - Pega o retorno da execução anterior e o próximo valor ( indice 2, ...)  e executa 
    
    1 = 4.66 + 3.78 = 8.44
    2 = 8.44 + 9.78 = 18.22
    3 = 18.22 + 1.34 = 19.56
    4 = 19.56 + 5.32 = 24.88
*/
// Exemplo de map/reduce
function adicinar_taxa(valor){
    return valor + 5;
}
var ret = preços.map(adicinar_taxa).reduce(somar);

console.log(ret);

//Exemplo filter/map/reduce
function preco_maior_4(valor){
    return valor > 4;
}
ret = preços.filter(preco_maior_4).map(adicinar_taxa).reduce(somar);

console.log(ret);






