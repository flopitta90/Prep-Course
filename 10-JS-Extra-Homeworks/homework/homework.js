// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var result = {}
  for(var i = 0; i < string.length; i++){
    if(result[string[i]] === undefined) {
      result[string[i]] = 1;
      }
      else result[string[i]] += 1
  }
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cap = ''
  var low = ''

  for(var i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()) {
      cap += s[i];
    }
    else low += s[i];
  } return cap + low
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayFrase = str.split(' ');
  var arrayReves = [];
  for(var i = 0; i < arrayFrase.length; i++){
    for(var j = arrayFrase[i].length -1; j > -1; j--) {
        arrayReves.push(arrayFrase[i][j])
    };
    arrayReves.push(' ');
  };
  // este pop() lo pongo por que va a haber un espacio de mas al final
  arrayReves.pop();
  var fraseFinal = arrayReves.join('');
  return fraseFinal
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var strNum = numero.toString();
  var numReverse = ''
  for(var i = strNum.length -1; i > -1; i--) {
    numReverse += strNum[i];
  };
  if (numReverse === strNum) return 'Es capicua';
  else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newCadena = ''
  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      newCadena += cadena[i]
    };
  };
  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Esocribe tu código aquí
  var orden = arr.sort((a, b) => a.length - b.length);
  return orden;
}  


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var common = arreglo1.filter((elemento) => arreglo2.includes(elemento));
  return common;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

