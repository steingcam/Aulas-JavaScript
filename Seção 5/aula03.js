//Seção 5 - Aula 3 - Foreach - Para cada elemento - Não devolve um novo Array

var curso = [
    'Programação para Leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java'
];

console.log(curso);
console.log(curso.length);

function imprimir(curso, indice, array){  //pode-se passar de dois a 3 parametros
    console.log(indice + ' - ' + curso);
    console.log(array.length);
}

//Para cada
//curso.forEach(imprimir);

//utilizando uma função anonima (lambda/callback) e template string
curso.forEach(function(curso,indice){
    console.log(`${indice} - ${curso}`);
});
