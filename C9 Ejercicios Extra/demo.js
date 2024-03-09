function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

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
console.log(buscoInterseccion([0, 2, 10], [1, 5, 8, 3]))