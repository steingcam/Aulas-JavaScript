//Seção 5 - Aula 5 - Filter
// Gera um novo array, depois de passar por um filtro
// Se for true ele coloca no Array, se for false ele descarta

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
}

function filtrar_impares(n){
    return n % 2 !== 0;
}

function multiplos_5(n){
    return n % 5 === 0 ;
}

var ret = numeros.filter(filtrar_pares);
//console.log(ret);

ret = numeros.filter(filtrar_impares);
//console.group(ret);

ret = numeros.filter(multiplos_5);
//console.log(ret);

var alunos = [
    {nome: "Ana", nota: 10},
    {nome: "Maria", nota: 7},
    {nome: "Caio", nota: 9},
    {nome: "Theo", nota: 6}
]

function filtrar_notas_maiores_8(aluno){
    return aluno.nota > 8;
}

var filtrados = alunos.filter(filtrar_notas_maiores_8);
console.log(filtrados);
