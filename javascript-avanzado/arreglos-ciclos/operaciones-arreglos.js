let numeros = [1, 3, 13, 14, 344, 543, 432, 45, 22];

/*numeros.forEach(function (numero) {
    document.write(numero + ', ');
    
});*/

/*es lo mismo que:

for(let i = 0; i < numeros.length; i++) {
    document.write(`${numeros[i]}</br>`);
}
*/

/* 
numeros.forEach(function (elemento, indice) {
    document.write(elemento + ' - ' + indice + '<br>');
    
});*/

/*numeros.forEach((elemento, indice) => {
    document.write(elemento + ', ');
    
});*/

let numeros2 = numeros.map(function(elemento){
    return elemento * 2; //regresa el arreglo multiplicado por 2
});

document.write('<br>' + numeros2 + '<br>');

/*let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

frutas2.push('pera');

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');*/

/*let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){ //crea un nuevo arreglo
    return elemento;
});*/

/*frutas2.push('pera');*/

//document.write('<br>' + frutas + '<br>');
//document.write('<br>' + frutas2 + '<br>');

/*Includes (evalúa si existe o no un elemento dentro del array*/
document.write('<br>' + numeros.includes('321') + '<br>')

/*Filter (crea nuevo array con elementos que cumplan la condición)*/

let numerosPares = numeros.filter((elemento) => { //imprime todos los números pares
    /*if(elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }*/
    /*return elemento % 2 == 0; (manera abreviada del if statement)*/

    if(elemento > 10) {
        return true;
    }
});

document.write('<br>' + numerosPares + '<br>');

let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate'];

let frutasFiltro = frutas.filter((fruta) => { //imprime los elementos que incluyen la letra 'i'

    if(fruta.includes('i') == true) {
        return true;
    }

    /*return fruta.includes('m'); (forma abreviada)*/
});

document.write('<br>' + frutasFiltro + '<br>' );

/* Sort */

let otrosNumeros = [9, 2, 3, 5, 7, 1, 4, 6, 8];

document.write('<br>' + numeros.sort() + '<br>');
document.write('<br>' + otrosNumeros.sort() + '<br>');

/* Reverse (invierte el orden de los elementos de un arreglo) */

document.write('<br>' + numeros.reverse() + '<br>');

/* find (regresa el primer elemento que cumpla con la condición) */

let frutaEncontrada = frutas.find((elemento) => {
    return elemento.includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>');



