//Usar var, let e const
// var escopo global
// let escopo local - definido atraves de chaves
// Const
const taxa = 1.22;
console.log(taxa);

let res = 45 * taxa;
console.log(res);

//taxa = 5; //TypeError
//console.log(taxa);

//Constante e Mutação
const curso = {nome: "Programação JavaScript"};
console.log(curso.nome);

//Não posso alterar o valor de uma constante
//curso = 43; //Erro!

//Podemos realizar mutação em dados
curso.nome = "Olá Mundo";
console.log(curso);

