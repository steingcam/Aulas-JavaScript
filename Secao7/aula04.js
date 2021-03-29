/*
   Declarando Atributos - Para criar atributos usa-se o método constructor (que nada mais é do que uma classe)
   Em JavaScript os atributos são todos públicos
*/

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Carro{
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
}