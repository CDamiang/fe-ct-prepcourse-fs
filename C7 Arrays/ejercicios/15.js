function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
   // Suponemos que el primer número del array es el más grande
   let indiceMayor = 0;

   // Recorremos el array desde el segundo elemento
   for (let i = 1; i < array.length; i++) {
       // Si el número actual es mayor que el número en el índiceMayor
       if (array[i] > array[indiceMayor]) {
           // Actualizamos el índiceMayor           
           indiceMayor = i;
       }
   }

   return indiceMayor;
}

module.exports = encontrarIndiceMayor;
