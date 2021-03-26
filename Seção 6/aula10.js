/*
Funções Closures (contexto léxico de uma função) - Identifica qual o escopo de uma variavel 
*/

let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; // local
    }

    return interna;

}

let executa = externa();

console.log(executa()); //local



