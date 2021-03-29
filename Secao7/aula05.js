/*
  Declarando Métodos - São os comportamentos do objeto que estamos modelando nas classes
  Método não tem a palavra function em sua estrutura
  No entanto tudo que aprendemos sobre funções é aplicado ao método
  this. = é a respeito do objeto que está executando o atributo
  para criar métodos get e set (permitem acesso a atributos):
  1 - colocar '_' no inicio do nome
*/

class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }   

    falar(msg){
        console.log(`${this.nome} esta falando: ${msg}`);
    }
    comer(){
        console.log(`${this.nome} esta comendo...`);
    }    
    beber(){
        console.log(`${this.nome} ${this.sobrenome} esta bebendo.`);
    }    

}

class Carro{
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }         
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }    
}