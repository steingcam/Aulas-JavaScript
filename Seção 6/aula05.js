/*
Funções com parametros variaveis e valor padrão

1. Quando não é definido o parametro na função, automaticamente o JavaScript cria um
array chamado arguments
2. Na linguagem JavaScript o valor zero é considerado falso
3. 
*/

//Ex 1
function somar(){
    let soma = 0;
    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma
}

//console.log(somar()); //0
//console.log(somar(2)); //2
//console.log(somar(2,5)); //7
//console.log(somar(5, 3, 9)); //17


function imprimi_valores(num1, num2){
    for (let i in arguments){
        console.log(arguments[i]);
    }
}

//imprimi_valores(); //Não imprimi nada
//imprimi_valores(4, 5); //Imprimi o 4 e o 5
//imprimi_valores(1, 2, 3); //Imprimi o 1, 2 e o 3

//Ex 2 Gambiara de quando JavaScript não tratava valor padrão

function somar2(num1, num2, num3){

    num1 = num1 || 1; //se num1 não estiver preenchido usar valor padrão 1
    num2 = num2 || 2; //se num2 não estiver preenchido usar valor padrão 2
    num3 = num3 || 3; //se num3 não estiver preenchido usar valor padrão 3

    return num1 + num2 + num3;
}

//console.log(somar2(4, 5, 6)); //15
//console.log(somar2()); // 6
//console.log(somar2(2)); //7
//console.log(somar2(2, 2)); //7
//console.log(somar2(2, 2, 2, 2)); //6, pois nesse caso não estamos usando o arguments
//console.log(somar2(0, 0, 0)); //6, entende que zero é falso e usa valor padrão


function somar3(num1, num2, num3){

    num1 = isNaN(num1) ? 1 : num1; //se num1 não for um numero então atribua valor padrão 1 senão atribua num1
    num2 = isNaN(num2) ? 2 : num2; //se num2 não for um numero então atribua valor padrão 2 senão atribua num2
    num3 = isNaN(num3) ? 3 : num3; //se num3 não for um numero então atribua valor padrão 3 senão atribua num3

    return num1 + num2 + num3;
}

//console.log(somar3(4, 5, 6)); //15
//console.log(somar3()); // 6
//console.log(somar3(2)); //7
//console.log(somar3(2, 2)); //7
//console.log(somar3(2, 2, 2, 2)); //6, pois nesse caso não estamos usando o arguments
//console.log(somar3(0, 0, 0)); //0, nesse caso resolve o problema do 0

//Ex 3 - Valor Padrão - Forma Recomendada de Utilização

function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

//console.log(somar4(4, 5, 6)); //15
//console.log(somar4()); // 6
//console.log(somar4(2)); //7
//console.log(somar4(2, 2)); //7
//console.log(somar4(2, 2, 2, 2)); //6, pois nesse caso não estamos usando o arguments
//console.log(somar4(0, 0, 0)); //0, nesse caso resolve o problema do 0

//console.log(somar4('a', 'b', 'c')); //abc
//console.log(somar4(true, false, 'c')); //1c - 1 é true e 0 é false , o JavaScript ignora o false
//console.log(somar4(2, true, false)); // 3 pois soma 2 + 1 (true ) e ignona o 0 (false)

function somar5 (num1 = 1, num2 = 2, num3 = 3){
    if (Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possivel efetuar a soma.';
    }
}

console.log(somar5('a', 'b', 'c')); //abc
console.log(somar5(true, false, 'c')); //1c - 1 é true e 0 é false , o JavaScript ignora o false
console.log(somar5(2, true, false)); // 3 pois soma 2 + 1 (true ) e ignona o 0 (false)



