//Seção 5 - Aula 8 - Template String
// Em template String usa-se a crase 
// Não é assento agudo e nem aspas simples
// É usando para concatenar strings

let idade = 29;
const nome = "Stephanie";

console.log(nome + ' tem ' + idade + ' anos.');

//Com template String
console.log(`1. ${nome} tem ${idade} anos.`);

//Usando com função
function soma_3(idade){
    return idade + 3;
}

console.log(`2. ${nome} tem ${soma_3(idade)} anos.`);

