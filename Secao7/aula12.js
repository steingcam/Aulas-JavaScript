/*
 Json - Formato de texto - comunicação entre sistemas
 Usado no formato da API
 As chaves de um Json ficam entre aspas duplas ""
 Por ser texto não pega as funções dos objetos apenas seus atributos
*/

const curso = {
    nome: 'Java',
    horas: 27,
    preco(){
         return this.horas * 0.67
    }
}

//console.log(curso);
//console.log(curso.preco());
//console.log(typeof(curso));

// Convertendo o objeto JavaScript para Json
//const json = JSON.stringify(curso);
//console.log(json);
//console.log(typeof(json));

// Convertendo de Json para Objeto JavaScript

//const obj = JSON.parse(json);
//console.log(obj);
//console.log.og(typeof(obj));

const json_errado = "{'nome': 'Java', 'preco': 27.99}";

console.log (json_errado);
console.log(typeof(json_errado));

//const novo_obj = JSON.parse(json_errado);
//console.log(novo_obj);
//console.log(typeof(novo_obj));

const json_corrigido = '{"nome": "Java", "preco": 27.99}';

console.log (json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj1 = JSON.parse(json_corrigido);
console.log(novo_obj1);
console.log(typeof(novo_obj1));


