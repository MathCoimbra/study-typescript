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