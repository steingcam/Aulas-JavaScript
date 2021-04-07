/*
  Instanciando Objetos - Coleção de chaves(atributos) e valor
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

// Forma 1 - Adicionando atributos dinamicamente

//const curso = new Object();
//curso.nome = 'JavaScript';
//curso.preco = 27.99;

//criando um novo atributo
//curso['qtd_alunos'] = 999;

//console.log(curso);

//delete curso['qtd_alunos'];

//console.log(curso);

// Forma 2 - Objeto Literal - Complexo

const Programa = {
    nome: 'Photoshop',
    preco: 1000.00,
    fabricante: {
        nome: 'Adobe',
        contato: 'contato@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

//console.log(Programa);
//console.log(Programa.nome);
//console.log(Programa.fabricante.nome);
//console.log(Programa.fabricante.filiais.cidade); //undefined
//console.log(Programa.fabricante.filiais[0].cidade);

// Forma 3 - Objeto Literal

//const pessoa = {}; //objeto sem nenhum atributo

//console.log(typeof(pessoa));

//pessoa.nome = 'Monica';

//console.log(pessoa);

// Forma 4 - Função Construtora

//function Lampada(cor){
//    this.cor = cor;
//}

//const li = new Lampada('Branca');

//console.log(li);

//console.log(typeof(li));

// Forma 5 - Objeto a partir da classes

const p1 = new Pessoa('Ana', 'Sobrenome');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); //feito o acesso via metodo get (get e set são especiais e não precisam de parentese)
console.log(p1.sobrenome); //feito o acesso via metodo get

p1.nome = 'Caio';
console.log(p1);

p1.falar("Olá!");
p1.comer();
p1.beber();