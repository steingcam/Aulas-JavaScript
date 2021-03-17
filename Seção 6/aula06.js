/*
Arrow Function: Forma Simplificada de escrever uma função
É representado pelo sinal =>
*/

let somar = (num1, num2) =>{
    return num1 + num2;
}

console.log(somar(1, 2));

/*
Atenção:
Caso a função tenha apenas 1 parametro de entrada e executa apenas uma linha,
você pode simplificar ainda mais a função 
*/

let dobrar = valor => valor * 2;

console.log(dobrar(3));

const msg = () => console.log('Olá Mundo');

msg();
