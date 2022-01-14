let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adios");// Objeto String
console.log(cadena2);

//let arreglo = new Array(1);
//console.log(arreglo);

//includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes("a"));

console.log(cadena2.toLowerCase());
console.log(cadena2.toLowerCase());

//cohersión y conversión

//cohersión - JavaScript convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida */

let palabra = "Hola Mundo";
let arreglo = palabra.split(""); //con espacio - convierte a cada palabra en un elemento del array. sin espacio - convierte a cada letra en un elemento del array
console.log(arreglo);
console.log(arreglo.reverse().join(""));

function invertirPalabra(cadena){
    let arreglo = cadena.split(""); //convierte la cadena en un arreglo
    arreglo.reverse();//invierte el arreglo
    let cadenaInvertida = arreglo.join("");//une los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida);
}

invertirPalabra("Generation");
