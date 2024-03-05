function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let sonIguales = array[0]
    for (let i = 1; i < array.length; i++) {
        if(sonIguales === array[i]){
            return true
        }       
    }
    return false

}

module.exports = todosIguales;
