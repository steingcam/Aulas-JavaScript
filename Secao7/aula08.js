/*
  Herança - Tem uma classe e uma subclasse atrelada a ela
*/

class Funcao{
  constructor(descricao, salario){
    this._descricao = descricao;
    this._salario = salario;
  }
  get descricao(){
    return this._descricao;
  }
  set descricao(descricao){
    this._descricao = descricao;
  }
  get salario(){
    return this._salario;
  }
  set salario(salario){
    this._salario = salario;
  }

}

class Pessoa{
  constructor(nome, sobrenome, email, cpf){
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
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
  get email(){
    return this._email;
  }
  set email(email){
    this._email = email;
  }
  get cpf(){
    return this._cpf;
  }
  set cpf(cpf){
    this._cpf = cpf;
  }
//Métodos Extra
  get nome_completo(){
    return this._nome + ' ' + this._sobrenome;
  }
  set nome_completo(nome_completo){
    nome_completo = nome_completo.split(' '); //transforma a string em um array

    this.nome =  nome_completo.shift(); //remove o primeiro elemento do array
    this.sobrenome = nome_completo.join(' '); //monta uma string a partir do array e separa cada elemento com espaço
  }
}
class Funcionario extends Pessoa{
  constructor(nome, sobrenome, email, cpf, funcao, registro){
    super(nome, sobrenome, email, cpf);
    this._funcao = funcao;
    this._registro = registro;
  }
  get funcao(){
    return this._funcao;
  }
  set funcao(funcao){
    this._funcao = funcao;
  }
  get registro(){
    return this._registro;
  }
  set registro(registro){
    this._registro = registro;
  }
}

class Cliente extends Pessoa{
  constructor(nome, sobrenome, email, cpf, renda) {
    super(nome, sobrenome, email, cpf);
    this._renda = renda;
  }
  get renda(){
    return this._renda;
  }
  set renda(renda){
    this._renda = renda;
  }
}

//const c1 = new Cliente('Felicity', 'Jones', 'fefe@gmail.com', '123.456.789.09', 5000);
//const c2 = new Cliente('Gelicity', 'Rones', 'gege@gmail.com', '123.456.789.10', 4000);

//console.log(c1);
//console.log(c2);

//c1.nome_completo = 'Carol Castro'
//console.log(c1);

const programador = new Funcao('Programador', 4500);
const suporte = new Funcao('Suporte', 2500);

const f1 = new Funcionario('Pedro', 'Henry', 'pedro@gmail.com', '444.555.666.77', programador, 'Blablabla');

console.log(f1);
console.log(f1.funcao.salario);


