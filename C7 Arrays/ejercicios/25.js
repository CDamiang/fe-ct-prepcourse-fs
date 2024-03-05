function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let array = []
  if (numeros === undefined ) {
      return 0
  } else {
      for (let i = 0; i < numeros.length; i++) {
          if (numeros[i] % 2 !== 0) {
              continue
          } else {
              array.push(numeros[i])
          }
          //console.log(array)
      }
      return array.length
  }
  
}

module.exports = contarParesConContinue;
