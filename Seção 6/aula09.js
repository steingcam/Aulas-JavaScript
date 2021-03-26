/*
Funções Construtora
*/

//Criando uma função Construtora

function Pessoa(n, s, raca = 'Humana'){
    //atributos privados só conseguimos fazer uso dentro da função construtora
    
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo publico pode ser acessado fora da função construtora

    this.raca = raca;

    //método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: $(nome), Idade: $(idade), Peso: $(peso), Altura: $(altura), Sexo: $(sexo), Raça: $(raca)`);
    }

    //método público conseguimos acessar fora da funcao construtora
    this.fazer_aniversário = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

const angelina = new Pessoa('Angelina', 'Feminino');

console.log(angelina);

console.log(angelina.peso); //privado
console.log(angelina.raca); //publico

angelina.fazer_aniversário(); // publico
console.log(angelina.getIdade());


console.log(typeof(Pessoa)); // function
console.log(typeof(angelina)); //object

