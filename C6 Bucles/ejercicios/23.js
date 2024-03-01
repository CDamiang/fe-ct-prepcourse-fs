function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let resultado = num;
  let i = 0;

  do {
    i = i + 1;
    resultado = resultado + 5;
  } while (i < 8);

  return resultado;
}

module.exports = doWhile;