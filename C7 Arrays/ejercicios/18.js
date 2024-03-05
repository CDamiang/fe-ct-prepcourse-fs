function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma= 0;
  let cantidadeNotas= resultadosTest.length;
  for (let i = 0; i < cantidadeNotas; i++) {
       suma = suma + resultadosTest[i];
       promedio = suma / cantidadeNotas;                     
  }
  return promedio
}

module.exports = promedioResultadosTest;
