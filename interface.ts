/* Criação de interfaces */

interface IAnimal {
  nome: string
  /* com o pipe é informado que essa propriedade terá um valor ou outro*/
  tipo: 'terrestre' | 'aquático'
  /* é possível criar funções dentro de uma interface */
  executarRugido(decibeis: number): void
}

/* Implementando a interface através de uma variável */
const animal: IAnimal = {
  nome: 'Leopardo',
  tipo: 'terrestre',
  executarRugido: (decibeis) => (
    `${decibeis}dB`
    ),
}

/* Herança de interfaces */

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

const felino: IFelino = {
  nome: 'Gato',
  tipo: 'terrestre',
  executarRugido: (decibeis) => (
    `${decibeis}dB`
    ),
  visaoNoturna: true
}