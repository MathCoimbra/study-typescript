let valorAny: any
valorAny = 1
valorAny = "abc"
valorAny = [1, 2]

let stringText: string = 'olá'
stringText = valorAny

let valorUnknown: unknown
valorUnknown = 1
valorUnknown = "abc"
valorUnknown = [1, 2]

let stringText2: string = 'olá'
/* enquanto no valorAny a operação similar abaixo é aceita, com o tipo unknown não é, pois nesse tipo é necessária realizar uma validação antes para atribuição do tipo */

  /* stringText2 = valorUnknown */

/* conforme abaixo após a validação do tipo a operação foi realizada */
if (typeof valorUnknown === 'string'){
  stringText2 = valorUnknown
}
