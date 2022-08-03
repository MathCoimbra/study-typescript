/* Desafio 1 */

let employee: { code: number, name: string } = {
  code: 10,
  name: "John"
}

console.log(`Código: ${employee.code} Nome: ${employee.name}`)

/* Desafio 2 */

enum Job {
  Atriz,
  Padeiro,
}

interface dados {
  nome: string,
  idade: number,
  profissao: Job
}

let pessoa1: dados = {
  nome: "maria",
  idade: 29,
  profissao: Job.Atriz
}

let pessoa2: dados = {
  nome: "roberto",
  idade: 19,
  profissao: Job.Padeiro
}

let pessoa3: dados = {
  nome: "laura",
  idade: 32,
  profissao: Job.Atriz
}

let pessoa4: dados = {
  nome: "carlos",
  idade: 19,
  profissao: Job.Padeiro
}

/* Desafio 3 */

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo')! as HTMLButtonElement
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString()
    limparCampoSoma()
  }
}

function limparCampoSoma() {
  soma.value = ""
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0
    campoSaldo.innerHTML = saldoTotal.toString()
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value))
  })
}
botaoLimpar.addEventListener('click', () => {
  limparSaldo()
})