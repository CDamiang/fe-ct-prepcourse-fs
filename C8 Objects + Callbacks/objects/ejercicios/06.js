const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let resultado =[]
  for (let prop in objeto) {
    resultado.push(prop)    
  }
  return resultado.length
};

module.exports = contarPropiedades;
