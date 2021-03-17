/*
Funções Callback
Chamar denovo
Quando há um evento que usa como parametro uma função

*/
const cursos = [
    "Curso A",
    "Curso B",
    "Curso C",
    "Curso D",
    "Curso E",
    "Curso F",
    "Curso G",
    "Curso H",            
];

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

//cursos.forEach(apresentar); //Aqui está ocorrendo o callback

//usando lambda
//cursos.forEach(function(curso, indice){
//    console.log(`${indice + 1} : ${curso}`);
//});

//usando arrow
//cursos.forEach((curso, indice) => console.log(`${indice + 1} = ${curso}`));

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.77];

let menores = [];

//Forma iniciante de verificar os valores menos que 50
for (let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}

console.log(menores);

//Forma Avançada

menores = precos.filter(function(preco){
    return preco < 50;
});

console.log(menores);

menores = precos.filter(preco => preco < 50);

console.log(menores);