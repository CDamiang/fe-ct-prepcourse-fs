function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDel6 = []
  for (let i = 0; i < 11; i++) {
    tablaDel6.push(i*6)
    
  }
  return tablaDel6
}

module.exports = tablaDelSeis;
