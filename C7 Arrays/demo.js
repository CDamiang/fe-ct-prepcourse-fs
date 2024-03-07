let array = [1,3,5,7,8,9,10,1]
/* function multiplicarElementosPorIndice(array) {
    // Multiplica cada elemento del array por su índice.
    // Devuelve el nuevo arreglo con los resultados.
    // Tu código:
    let arrayNuevo=[]
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i]*i                        
        console.log(elemento)
        //let arrayNuevo =[]
        arrayNuevo.push(elemento)
        //console.log(arrayNuevo)
        
    }
   console.log(arrayNuevo)
  }
multiplicarElementosPorIndice(array) */


/* function agregarNumeros(array) {
    // Suma todos los elementos de arrayOfNums y retorna el resultado.
    // Tu código:
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i]
        //console.log(suma)        
    }
    console.log(suma)
  }
agregarNumeros(array) */

/* function promedioResultadosTest(resultadosTest) {
    // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
    // Tu código:
    let suma= 0;
    let cantidadeNotas= resultadosTest.length;
    for (let i = 0; i < cantidadeNotas; i++) {
         suma = suma + resultadosTest[i]
         //console.log(suma)        
    }
    console.log(suma /cantidadeNotas)
  }

  promedioResultadosTest(array) */

/*   function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    if(arguments.length === 0){
        console.log(0)
        //return 0
    }else if (arguments.length === 1){
        console.log(arguments[0])
        //return arguments[0]
    }else{
        let producto = 1
        for (let i = 0; i < arguments.length; i++) {
            producto = producto * arguments[i];            
        }
        console.log(producto)
    }
  
  }
  multiplicarArgumentos(5,3,5,10,8); */

/*   function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    let sonIguales = array[0]
    for (let i = 1; i < array.length; i++) {
        if(sonIguales === array[i]){
            console.log(true)
        }       
    }
    console.log(false)

  }
todosIguales(array)   */

var ok = [
    'Marzo',
    'Diciembre',
    'Abril',
    'Junio',
    'Julio',
    'Enero',
    'Mayo',
    'Febrero',
];

//function mesesDelAño(array) {
// El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
// // Tu código:

/*     let filtrar= array.filter(elemento => elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre")
    filtrar.sort()
    console.log(filtrar) 
    if (filtrar.length === 3){
        console.log(filtrar)
    }else{
        console.log("No se encontraron los meses pedidos")
    }
    
  }
  mesesDelAño(ok) */
/*  function tablaDelSeis() {
   // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Desde 0 al 60.
   // Tu código:
   let tablaDel6 = []
   for (let i = 1; i < 11; i++) {
     tablaDel6.push(i*6)
     
   }
   console.log(tablaDel6)
 }
tablaDelSeis() */

/* function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retórnarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // PISTA: Utiliza el statement 'break'.
    // Tu código:
  let array = []
    for (let i = 0; i < 10; i++) {
        num += 2
        if (num === i) {
            console.log("Se interrumpió la ejecución")
            break
        }
        array.push(num)
    }
    console.log(array)
}
breakStatement(-4) */

/* function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continúa con la siguiente iteración.
    // PISTA: Utiliza el statement 'continue'.
    // Tu código:
    let array =[]
    for (let i = 0; i < 10; i++) {
        if( i === 5){
            continue
        }
        num +=2
        array.push(num)
        
    }
    console.log(array)

  }
  continueStatement(1) */

/* function contarParesConContinue(numeros) {
    // La función recibe un array de numeros por argumento.
    // Devuelve la cantidad de números pares que hay en el array.
    // Evita los impares utilizando continue.
    // Tu código:
    let array = []
    if (numeros === undefined ) {
        return 0
    } else {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 !== 0) {
                continue
            } else {
                array.push(numeros[i])
            }
            //console.log(array)
        }
        console.log(array.length) 
        
    }

}
contarParesConContinue([1,2,3,4,5,6,7,8]) */

/* function encontrarPrimerMultiploDeN(n, secuencia) {
    // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
    // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
    // Usa un break para detener el bucle una vez halles el múltiplo.
    // Tu código:

    
  } */

/*   function encontrarElementoRepetido(numeros) {
    // La función recibe un argumento "numeros" que es un array de números.
    // Retorna el primer elemento repetido que se encuentre en el array.
    // Tu código:
    let elementosVistos = {};
    for (let i = 0; i < numeros.length; i++) {
        if (elementosVistos[numeros[i]] !== undefined) {
            console.log(numeros[i])
            return numeros[i];
        } else {
            elementosVistos[numeros[i]] = true;
        }
    }

    
    return undefined; // Si no se encuentra ningún elemento repetido

   
  } */
//   encontrarElementoRepetido([1,3,5,7,8,9,10,1])

function sumarArray(arrayOfNumbers) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // NOTA: no debes retornar nada.
    // Tu código:
    let resultado= 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       resultado += arrayOfNumbers[i]; 
                  
    }
    console.log(resultado)
 }
//sumarArray([1,3,5,7,8,9,10,1])

function map(array, cb) {
    // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
    let resultado = []
    for (let i = 0; i < array.length; i++) {
      resultado.push(cb(array[i]));    
    }
    return resultado 
  }
  //map([1,3,5,7,8,9,10,1])
  let objUsu ={
    amigo: [1,3,5,7,8,9,10,1]
  }

  function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.amigo.push(nuevoAmigo)
    return objetoUsuario
  
  }
  //console.log(agregarAmigo(objUsu,'Damian'))




  const user = {
    usernombre: 'Jhon Doe',
    password: 'JavaScript es genial!',
    posts: [
      {
        id: '1',
        title: 'Aventuras en JS!',
        likes: 10,
      },
      {
        id: '2',
        title: 'Soy Henry!',
        likes: 100,
      },
      {
        id: '3',
        title: 'Qué es un JavaScript?',
        likes: 35,
      },
      {
        id: '4',
        title: 'JS Objects for Dummies',
        likes: 42,
      },
      {
        id: '5',
        title: 'Educación online',
        likes: 99,
      },
    ],
  };

  function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    let suma = 0
    let posteos = objetoUsuario.posts
    for (let i = 0; i < posteos.length; i++) {
        suma += posteos[i].likes        
    }
    return suma
    
  }
  //console.log(sumarLikesDeUsuario(user))
  //console.log(user.posts)

 let objeto1 = { x: 1, y: 2 }

  function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    let array =[]
    
    for (let pro in objeto) {
      let arrayhijo=[]      
      arrayhijo.push(pro)
      arrayhijo.push(objeto[pro])      
      array.push(arrayhijo);    
    }
    return array
  }
  console.log(deObjetoAarray(objeto1))
  