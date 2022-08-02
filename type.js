"use strict";
/* Criação de types */
/* Com essa junção todos os dados são requeridos na implementação: */
const pj = {
    nome: 'MathCoimbra',
    tipo: 'jurídica',
    cnpj: 45789142000121
};
/* Exemplo de type com elemento HTML */
let button = document.getElementById('btn');
let input1 = document.getElementById('i1');
let input2 = document.getElementById('i2');
const somar = (num1, num2) => num1 + num2;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(somar(Number(input1.value), Number(input2.value)));
    });
}
/* Generic type */
/* <Generic> - definido que os parâmetros dessa função podem ser de qualquer tipo */
/* any[] - significa que esse array pode ser de qualquer tipo */
function getItem(array, valor) {
    return array.map(item => item + valor);
}
getItem([1, 2, 3, 4], 'a');
