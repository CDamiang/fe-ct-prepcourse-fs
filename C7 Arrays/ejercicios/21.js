function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // // Tu código:
  let filtrar= array.filter(elemento => elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre")
    
    if (filtrar.length === 3){
        return filtrar
    }else{
        return "No se encontraron los meses pedidos"
    }
}

module.exports = mesesDelAño;
