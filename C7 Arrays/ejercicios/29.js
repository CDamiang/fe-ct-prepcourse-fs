function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Retorna null si el array es vacío
}

let min = Math.min(...numeros);
let max = Math.max(...numeros);
let sumaTotal = (max - min + 1) * (max + min) / 2;
let sumaActual = numeros.reduce((a, b) => a + b, 0);

if (sumaTotal === sumaActual) {
    return null; // Retorna null si no hay números faltantes
}

return sumaTotal - sumaActual;
}

module.exports = encontrarNumeroFaltante;