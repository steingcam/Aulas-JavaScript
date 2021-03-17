// Seção 5 - Aula 10 - Destructuring
// Extrai dados de uma estrutura para uma variavel
// Essa estrutura pode ser um array

//Destructuring com Array
const numeros = [1, 2, 3, 4];

const [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// Excluindo valores

const [n1, , n3, n4] = numeros;

console.log(n1);
console.log(n3);
console.log(n4);

// Podemos colocar valores default, que será usado caso não tenha no container

const [nu1, nu2, nu3, nu4=1, nu5=2] = numeros;

console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);

