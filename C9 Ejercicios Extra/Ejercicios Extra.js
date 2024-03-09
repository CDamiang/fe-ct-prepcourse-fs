/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = []

  for (let pro in objeto) {
    let arrayhijo = []
    arrayhijo.push(pro)
    arrayhijo.push(objeto[pro])
    array.push(arrayhijo);
  }
  return array
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {}

  for (let i = 0; i < string.length; i++) {
    let acum = 1
    objeto[string[i]] = acum

    for (let j = 0; j < string.length; j++) {
      if (string[i] == string[j] && j != i) {
        acum += string[i]
        objeto[string[i]] = acum.length
      }
    }
  }
  return objeto


}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringMay = string.toUpperCase()
  let arrayMay = []
  let arrayMin = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === stringMay[i]) {
      arrayMay.push(string[i])
    } else {
      arrayMin.push(string[i])
    }
  }
  let nuevostring = arrayMay.join('') + arrayMin.join('')
  return nuevostring

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let nuevaFrase = frase.split(' ')
  let array = []
  let arrayInvertido = []

  for (let i = 0; i < nuevaFrase.length; i++) {
    let pseudoFrase = nuevaFrase[i].split('').reverse()
    array.push(pseudoFrase)
  }

  for (let i = 0; i < array.length; i++) {
    let pseudoArray = array[i].join('')
    arrayInvertido.push(pseudoArray)
  }

  return arrayInvertido.join(' ')

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let cadena = numero.toString();
  let cadenaInvertida = cadena.split('').reverse().join('');

  if (cadena === cadenaInvertida) {
    return "Es capicua"
  } else return "No es capicua"
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let nuevoString = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'b' || string[i] === 'c') {
      continue
    } nuevoString += string[i]
  }

  return nuevoString
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length)
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:let interseccion = [];
  let interseccion = [];
  let array = []
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      interseccion.push(array1[i]);
    } else {
      array
    }
  }
  return interseccion;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
