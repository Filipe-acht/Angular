var minhaVar = 'minha variavel';

function minhaFunc(x, y){
    return x + y;
}

// ES 6 ou ES 2015
// transpiler -> vai compilar o codigo da ECMAScript 2015 em JavaScript puro.
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2); //ES 2015


class Matematica{
    soma(x, y){
        return x + y;
    }
};




// definição do tipo de class
// tipando a variável

var n1: string = 'sdsds';
var n2: any = 'asdasd';
n2 = 1;