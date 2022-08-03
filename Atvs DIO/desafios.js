"use strict";
/* Desafio 1 */
let employee = {
    code: 10,
    name: "John"
};
console.log(`Código: ${employee.code} Nome: ${employee.name}`);
/* Desafio 2 */
var Job;
(function (Job) {
    Job[Job["Atriz"] = 0] = "Atriz";
    Job[Job["Padeiro"] = 1] = "Padeiro";
})(Job || (Job = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Job.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Job.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro
};
/* Desafio 3 */
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
