function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
   // Verificar si la fecha tiene el formato correcto
   
   if (Object.prototype.toString.call(fecha)=== '[object Date]'){
    if(!isNaN(fecha.getTime())){
      if(
        fecha.getDate()>0 &&
        fecha.getMonth()>= 0 &&
        fecha.getMonth()<12 &&
        fecha.getFullYear()>= 0
      ){
        return true;
      }
    }
   } return false;
  }
//console.log(esFechaValida('2024-02-30'))
module.exports = esFechaValida;