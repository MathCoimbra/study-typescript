/* Exemplo de type personalizado */

type numString = number | string

/* definido após os parâmetros que essa função terá retorno de um number ou string */
function somarValores(parametro1: numString, parametro2: numString): number | string {
  if (typeof parametro1 === 'string' || typeof parametro2 === 'string') {
    return parametro1.toString() + parametro2.toString()
  } else {
    return parametro1 + parametro2
  }
}

console.log(somarValores(1 , 5))
console.log(somarValores('olá', '!'))

/* Junção de interfaces */

interface IPessoa {
  nome: string
}

interface IPessoaJuridica extends IPessoa {
  tipo: 'jurídica'
  cnpj: number
}

interface IPessoaFisica extends IPessoa {
  tipo: 'física'
  cpf: number
}

type IMei = IPessoa & IPessoaJuridica

/* Com essa junção todos os dados são requeridos na implementação: */
const pj: IMei = {
  nome: 'MathCoimbra',
  tipo: 'jurídica',
  cnpj: 45789142000121
}

/* Exemplo de type de elemento HTML */

let button = document.getElementById('btn')
let input1 = document.getElementById('i1') as HTMLInputElement
let input2 = document.getElementById('i2') as HTMLInputElement

const somar = (num1: number, num2: number) => num1 + num2

if (button) {
  button.addEventListener('click', () => {
    if (input1 && input2)
      console.log(somar(Number(input1.value), Number(input2.value)))
  })
}

/* Generic type */

/* <Generic> - definido que os parâmetros dessa função podem ser de qualquer tipo */
/* any[] - significa que esse array pode ser de qualquer tipo, esse tipo não é bom utilizar pois vai contra uma das maiores vantagens do typescript, que é a tipagem */
function getItem<Generic>(array: any[], valor: Generic) {
  return array.map(item => item + valor)
}

getItem([1, 2, 3, 4], 'a')

