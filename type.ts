/* Criação de types */

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

  /* Junção das interfaces */
type IMei = IPessoa & IPessoaJuridica

  /* Com essa junção todos os dados são requeridos na implementação: */
const pj: IMei = {
  nome: 'MathCoimbra',
  tipo: 'jurídica',
  cnpj: 45789142000121 
}

/* Exemplo de type com elemento HTML */

const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement
  console.log(i.value)
})

/* Generic type */

  /* <Generic> - definido que os parâmetros dessa função podem ser de qualquer tipo */
  /* any[] - significa que esse array pode ser de qualquer tipo */
function getItem<Generic>(array: any[], valor: Generic){
  return array.map(item => item + valor)
}

getItem([1,2,3,4], 'a')