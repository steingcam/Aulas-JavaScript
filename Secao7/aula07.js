/*
  Objetos e suas funções
*/

const curso = {
    nome: 'Java',
    horas: 25,
    preco: 27.99
}

console.log(curso);
/*console.log(typeof(curso));

console.log(Object.keys(curso)); //esse método retorna quais são os atributos(chaves) de um objeto
console.log(Object.values(curso)); //esse método retorna quais são os valores dos atributos(chaves) de um objeto
console.log(Object.entries(curso)); // esse método retorna o atributo e o seu valor


Object.entries(curso).forEach(par => {
   console.log(`${par[0]}: ${par[1]}`); 
});

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
*/

// Definindo atributos que não podem ser modificados, ou seja, apenas leitura
// passa o objeto, o nome do novo atributo, e as configurações desse atributo

Object.defineProperty(curso, 'publicacao', {
    enumerable: false, // quando estiver com false não permite a visualização do atributo no objeto
    writable: false, // não permite reescrever o atributo
    value: '31/03/2021'
});

console.log(curso);
console.log(curso.publicacao);

Object.freeze(curso); //não permite que os atributos de um objeto sejam reescritos

// Criando uma tabela para visualização de um objeto

const usuarios = [
    {nome: 'Ana', empresa: 'Ambev'},
    {nome: 'Alison', empresa: 'AmbevTech'},
    {nome: 'Carla', empresa: 'HBSIS'},
]

console.log(usuarios);
console.table(usuarios);
console.table(curso);

